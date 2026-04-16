'use server'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type IndividualBookingData = {
  type: 'individual'
  date: string
  departureTime: string
  adults: number
  children: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export type GroupBookingData = {
  type: 'group'
  date: string
  departureTime: string
  adults: number
  children: number
  firstName: string
  lastName: string
  email: string
  phone: string
  organizationName: string
  totalParticipants: number
  specialRequirements: string
  preferredContact: 'email' | 'phone'
}

export type BookingData = IndividualBookingData | GroupBookingData

export type BookingResult = { success: true } | { success: false; error: string }

// ---------------------------------------------------------------------------
// Webhook payload shape (sent to Make)
// ---------------------------------------------------------------------------
//
// {
//   type: "individual" | "group",
//   submittedAt: string,           // ISO 8601
//   contact: {
//     firstName, lastName, email, phone
//   },
//   booking: {
//     date,                        // "YYYY-MM-DD"
//     departureTime,               // "10:00"
//     adults,
//     children,
//   },
//   group?: {                      // only present when type === "group"
//     organizationName,
//     totalParticipants,
//     specialRequirements,
//     preferredContact,            // "email" | "phone"
//   }
// }
//
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateCommon(data: BookingData): string | null {
  if (!data.date) return 'Please select a date.'
  if (!data.departureTime) return 'Please select a departure time.'

  const bookingDateTime = new Date(`${data.date}T${data.departureTime}`)
  const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000)
  if (isNaN(bookingDateTime.getTime()) || bookingDateTime < twoHoursFromNow) {
    return 'Online booking must be completed at least two hours before departure.'
  }

  if (data.adults < 1) return 'At least one adult is required.'
  if (data.children < 0) return 'Invalid number of children.'
  if (!data.firstName.trim()) return 'First name is required.'
  if (!data.lastName.trim()) return 'Last name is required.'
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) return 'A valid email address is required.'

  return null
}

// ---------------------------------------------------------------------------
// Server action
// ---------------------------------------------------------------------------

export async function submitBooking(data: BookingData): Promise<BookingResult> {
  // ── Common validation ──
  const commonError = validateCommon(data)
  if (commonError) return { success: false, error: commonError }

  // ── Group-specific validation ──
  if (data.type === 'group') {
    if (!data.organizationName.trim()) return { success: false, error: 'Organisation name is required.' }
    if (data.totalParticipants < 10) return { success: false, error: 'Group bookings require at least 10 participants.' }
    if (!data.preferredContact) return { success: false, error: 'Please select a preferred contact method.' }
  }

  // ── Build payload ──
  const payload = {
    type: data.type,
    submittedAt: new Date().toISOString(),
    contact: {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
    },
    booking: {
      date: data.date,
      departureTime: data.departureTime,
      adults: data.adults,
      children: data.children,
    },
    ...(data.type === 'group' && {
      group: {
        organizationName: data.organizationName.trim(),
        totalParticipants: data.totalParticipants,
        specialRequirements: data.specialRequirements.trim(),
        preferredContact: data.preferredContact,
      },
    }),
  }

  // ── TODO: Plug in your Make webhook ──
  // 1. Add MAKE_WEBHOOK_URL to .env.local (and Vercel environment variables).
  // 2. Make will receive the JSON payload described above.
  // 3. No other changes required here — the handler is ready.
  const webhookUrl = process.env.MAKE_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('[booking] MAKE_WEBHOOK_URL is not set. Payload:', JSON.stringify(payload, null, 2))
    return {
      success: false,
      error: 'The booking service is not configured yet. Please contact us directly.',
    }
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('[booking] Make webhook responded with', res.status)
      return { success: false, error: 'We could not process your booking. Please try again or contact us.' }
    }

    return { success: true }
  } catch (err) {
    console.error('[booking] Error reaching Make webhook:', err)
    return { success: false, error: 'A network error occurred. Please try again.' }
  }
}
