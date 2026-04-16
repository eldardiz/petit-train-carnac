'use client'

import Image from 'next/image'
import { useState } from 'react'
import { submitBooking, type BookingData } from '@/app/actions/booking'

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEPARTURE_TIMES = ['10:00', '11:30', '13:00', '14:30', '16:00']

const todayISO = () => new Date().toISOString().split('T')[0]

// ---------------------------------------------------------------------------
// Shared form state shape
// ---------------------------------------------------------------------------

type FormValues = {
  date: string
  departureTime: string
  adults: number
  children: number
  firstName: string
  lastName: string
  email: string
  phone: string
  // group-only
  organizationName: string
  totalParticipants: number
  specialRequirements: string
  preferredContact: 'email' | 'phone'
}

const defaultValues: FormValues = {
  date: '',
  departureTime: '',
  adults: 1,
  children: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organizationName: '',
  totalParticipants: 10,
  specialRequirements: '',
  preferredContact: 'email',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

// ---------------------------------------------------------------------------
// Input + label primitives (isolated from presentation logic)
// ---------------------------------------------------------------------------

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-['Roboto',sans-serif] text-sm font-medium text-[#181d27] mb-1"
    >
      {children}
    </label>
  )
}

const inputClass =
  "w-full h-[42px] px-3 border border-[#d5d7da] rounded-[4px] bg-white font-['Roboto',sans-serif] text-sm text-[#181d27] placeholder:text-[#a4a7ae] focus:outline-none focus:ring-2 focus:ring-[#5a4a6e] focus:border-transparent transition-shadow"

const textareaClass =
  "w-full px-3 py-2 border border-[#d5d7da] rounded-[4px] bg-white font-['Roboto',sans-serif] text-sm text-[#181d27] placeholder:text-[#a4a7ae] focus:outline-none focus:ring-2 focus:ring-[#5a4a6e] focus:border-transparent transition-shadow resize-none"

// ---------------------------------------------------------------------------
// Individual booking form fields
// ---------------------------------------------------------------------------

function IndividualFields({
  values,
  onChange,
}: {
  values: FormValues
  onChange: (patch: Partial<FormValues>) => void
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Date + Departure time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="ind-date">Date *</Label>
          <input
            id="ind-date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => onChange({ date: e.target.value })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label htmlFor="ind-time">Departure time *</Label>
          <select
            id="ind-time"
            value={values.departureTime}
            onChange={(e) => onChange({ departureTime: e.target.value })}
            className={inputClass}
            required
          >
            <option value="">Select time</option>
            {DEPARTURE_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Adults + Children */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="ind-adults">Adults *</Label>
          <input
            id="ind-adults"
            type="number"
            min={1}
            max={50}
            value={values.adults}
            onChange={(e) => onChange({ adults: Math.max(1, parseInt(e.target.value) || 1) })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label htmlFor="ind-children">Children (4–12)</Label>
          <input
            id="ind-children"
            type="number"
            min={0}
            max={50}
            value={values.children}
            onChange={(e) => onChange({ children: Math.max(0, parseInt(e.target.value) || 0) })}
            className={inputClass}
          />
        </div>
      </div>

      <p className="font-['Roboto',sans-serif] text-xs text-[#535862] -mt-2">
        Children under 4 ride free — no ticket needed.
      </p>

      {/* Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="ind-fname">First name *</Label>
          <input
            id="ind-fname"
            type="text"
            value={values.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className={inputClass}
            placeholder="Marie"
            required
          />
        </div>
        <div>
          <Label htmlFor="ind-lname">Last name *</Label>
          <input
            id="ind-lname"
            type="text"
            value={values.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className={inputClass}
            placeholder="Dupont"
            required
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="ind-email">Email *</Label>
          <input
            id="ind-email"
            type="email"
            value={values.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className={inputClass}
            placeholder="marie@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="ind-phone">Phone</Label>
          <input
            id="ind-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className={inputClass}
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Group booking form fields
// ---------------------------------------------------------------------------

function GroupFields({
  values,
  onChange,
}: {
  values: FormValues
  onChange: (patch: Partial<FormValues>) => void
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Organisation */}
      <div>
        <Label htmlFor="grp-org">Organisation / Group name *</Label>
        <input
          id="grp-org"
          type="text"
          value={values.organizationName}
          onChange={(e) => onChange({ organizationName: e.target.value })}
          className={inputClass}
          placeholder="École primaire Jean Moulin"
          required
        />
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="grp-date">Date *</Label>
          <input
            id="grp-date"
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => onChange({ date: e.target.value })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label htmlFor="grp-time">Departure time *</Label>
          <select
            id="grp-time"
            value={values.departureTime}
            onChange={(e) => onChange({ departureTime: e.target.value })}
            className={inputClass}
            required
          >
            <option value="">Select time</option>
            {DEPARTURE_TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Participants breakdown */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="grp-total">Total participants *</Label>
          <input
            id="grp-total"
            type="number"
            min={10}
            value={values.totalParticipants}
            onChange={(e) => onChange({ totalParticipants: Math.max(10, parseInt(e.target.value) || 10) })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label htmlFor="grp-adults">Adults</Label>
          <input
            id="grp-adults"
            type="number"
            min={0}
            value={values.adults}
            onChange={(e) => onChange({ adults: Math.max(0, parseInt(e.target.value) || 0) })}
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="grp-children">Children (4–12)</Label>
          <input
            id="grp-children"
            type="number"
            min={0}
            value={values.children}
            onChange={(e) => onChange({ children: Math.max(0, parseInt(e.target.value) || 0) })}
            className={inputClass}
          />
        </div>
      </div>

      {/* Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="grp-fname">Contact first name *</Label>
          <input
            id="grp-fname"
            type="text"
            value={values.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className={inputClass}
            placeholder="Marie"
            required
          />
        </div>
        <div>
          <Label htmlFor="grp-lname">Contact last name *</Label>
          <input
            id="grp-lname"
            type="text"
            value={values.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className={inputClass}
            placeholder="Dupont"
            required
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="grp-email">Email *</Label>
          <input
            id="grp-email"
            type="email"
            value={values.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className={inputClass}
            placeholder="marie@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="grp-phone">Phone</Label>
          <input
            id="grp-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className={inputClass}
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      {/* Preferred contact */}
      <div>
        <Label htmlFor="grp-contact">Preferred contact method *</Label>
        <div className="flex gap-4 mt-1">
          {(['email', 'phone'] as const).map((method) => (
            <label
              key={method}
              className="flex items-center gap-2 font-['Roboto',sans-serif] text-sm text-[#181d27] cursor-pointer"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                checked={values.preferredContact === method}
                onChange={() => onChange({ preferredContact: method })}
                className="accent-[#5a4a6e]"
              />
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Special requirements */}
      <div>
        <Label htmlFor="grp-special">Special requirements</Label>
        <textarea
          id="grp-special"
          rows={3}
          value={values.specialRequirements}
          onChange={(e) => onChange({ specialRequirements: e.target.value })}
          className={textareaClass}
          placeholder="Wheelchair access, dietary needs, language preferences…"
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function BookingHero() {
  const [tab, setTab] = useState<'individual' | 'group'>('individual')
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function patch(update: Partial<FormValues>) {
    setValues((prev) => ({ ...prev, ...update }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const data: BookingData =
      tab === 'individual'
        ? {
            type: 'individual',
            date: values.date,
            departureTime: values.departureTime,
            adults: values.adults,
            children: values.children,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
          }
        : {
            type: 'group',
            date: values.date,
            departureTime: values.departureTime,
            adults: values.adults,
            children: values.children,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            organizationName: values.organizationName,
            totalParticipants: values.totalParticipants,
            specialRequirements: values.specialRequirements,
            preferredContact: values.preferredContact,
          }

    const result = await submitBooking(data)

    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  return (
    <section className="bg-[#5a4a6e] py-[112px] px-5 xl:px-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-[64px] items-center">
        {/* ── Left: copy ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Section label */}
          <div className="flex items-center gap-2">
            <div className="relative shrink-0 w-[19px] h-[19px]">
              <Image
                src="/figma-assets/icon-train-white.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Libre_Baskerville',serif] italic text-white text-base leading-6 tracking-[-0.48px]">
              Book your ride
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-['Libre_Baskerville',serif] text-[40px] sm:text-[48px] xl:text-[60px] text-white leading-[1.1] tracking-[-3.36px] [text-wrap:balance]">
            Book your Petit Train tour in Carnac
          </h1>

          {/* Description */}
          <p className="font-['Roboto',sans-serif] text-white/80 text-base leading-[1.2] tracking-[-0.48px] max-w-[551px]">
            Reserve your tickets for the Petit Train de Carnac in just a few steps. Choose your date
            and departure time, select the number of tickets, and confirm your booking online. The
            tour includes multilingual audio commentary and a version adapted for children.
          </p>

          {/* Departure note */}
          <div className="flex items-start gap-2">
            <div className="relative shrink-0 w-4 h-[18px] mt-0.5">
              <Image
                src="/figma-assets/LocationWhite.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Roboto',sans-serif] text-white/80 text-base leading-[1.2] tracking-[-0.48px]">
              Departure from the{' '}
              <strong className="font-bold text-white">Ménec car park</strong> in{' '}
              <strong className="font-bold text-white">Carnac</strong>, in front of the Maison des
              Mégalithes.
            </p>
          </div>
        </div>

        {/* ── Right: booking form card ── */}
        <div className="w-full xl:w-[608px] shrink-0">
          <div className="bg-white rounded-[8px] overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.18)]">
            {/* Tab switcher */}
            <div className="flex border-b border-[#e9eaeb]">
              {(['individual', 'group'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTab(t)
                    setStatus('idle')
                    setErrorMsg('')
                  }}
                  className={`flex-1 h-[52px] font-['Roboto',sans-serif] text-base font-medium tracking-[-0.48px] transition-colors ${
                    tab === t
                      ? 'bg-[#5a4a6e] text-white'
                      : 'bg-[#f7f7f0] text-[#535862] hover:bg-[#eeeee6]'
                  }`}
                >
                  {t === 'individual' ? 'Individual booking' : 'Group booking'}
                </button>
              ))}
            </div>

            {/* Form body */}
            <div className="p-6">
              {status === 'success' ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#5a4a6e]/10 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5a4a6e"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Libre_Baskerville',serif] text-[22px] text-[#181d27] leading-[1.2] tracking-[-1.4px] mb-2">
                      {tab === 'individual' ? 'Booking request received!' : 'Group enquiry received!'}
                    </p>
                    <p className="font-['Roboto',sans-serif] text-[#535862] text-sm leading-[1.4]">
                      We've received your request and will be in touch at{' '}
                      <strong className="text-[#181d27]">{values.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setValues(defaultValues)
                    }}
                    className="mt-2 font-['Roboto',sans-serif] text-sm text-[#5a4a6e] underline underline-offset-2"
                  >
                    Submit another booking
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate>
                  {/* Error banner */}
                  {status === 'error' && errorMsg && (
                    <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-[4px]">
                      <p className="font-['Roboto',sans-serif] text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  {tab === 'individual' ? (
                    <IndividualFields values={values} onChange={patch} />
                  ) : (
                    <GroupFields values={values} onChange={patch} />
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-6 w-full h-[48px] bg-[#5a4a6e] text-white font-['Roboto',sans-serif] text-base font-medium tracking-[-0.64px] rounded-[4px] shadow-[0px_1px_2px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] hover:bg-[#4a3a5e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading'
                      ? 'Sending…'
                      : tab === 'individual'
                      ? 'Book now'
                      : 'Request group booking'}
                  </button>

                  <p className="mt-3 font-['Roboto',sans-serif] text-xs text-[#a4a7ae] text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
