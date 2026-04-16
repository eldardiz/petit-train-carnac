'use client'

import Image from 'next/image'
import { useState } from 'react'
import { submitPrivatisation, type PrivatisationData } from '@/app/actions/privatisation'

// ---------------------------------------------------------------------------
// Form defaults
// ---------------------------------------------------------------------------

const defaultValues: PrivatisationData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  companyName: '',
  departureLocation: '',
  departureTime: '',
  eventType: '',
  eventDate: '',
  guestCount: 10,
  additionalInfo: '',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

// ---------------------------------------------------------------------------
// Input primitives matching the Figma form style
// ---------------------------------------------------------------------------

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="absolute font-['Roboto',sans-serif] font-medium text-[#58496c] text-[13px] leading-none left-[10px] top-[8px] tracking-[0.1px] pointer-events-none">
      {children}
    </p>
  )
}

const inputClass =
  "w-full h-[63px] pt-[26px] pb-[10px] px-[10px] bg-white border border-[rgba(88,73,108,0.12)] rounded-[10px] font-['Roboto',sans-serif] text-[14px] text-[#181d27] placeholder:text-[rgba(88,73,108,0.45)] focus:outline-none focus:ring-2 focus:ring-[#5a4a6e]/30 focus:border-[rgba(88,73,108,0.4)] transition-shadow"

const selectClass =
  "w-full h-[63px] pt-[26px] pb-[10px] px-[10px] bg-white border border-[rgba(88,73,108,0.12)] rounded-[10px] font-['Roboto',sans-serif] text-[14px] text-[#181d27] focus:outline-none focus:ring-2 focus:ring-[#5a4a6e]/30 focus:border-[rgba(88,73,108,0.4)] transition-shadow appearance-none cursor-pointer"

const textareaClass =
  "w-full pt-[26px] pb-[10px] px-[10px] bg-white border border-[rgba(88,73,108,0.12)] rounded-[10px] font-['Roboto',sans-serif] text-[14px] text-[#181d27] placeholder:text-[rgba(88,73,108,0.45)] focus:outline-none focus:ring-2 focus:ring-[#5a4a6e]/30 focus:border-[rgba(88,73,108,0.4)] transition-shadow resize-none"

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PrivatisationHero() {
  const [values, setValues] = useState<PrivatisationData>(defaultValues)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(field: keyof PrivatisationData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const raw = e.target.value
      setValues((prev) => ({
        ...prev,
        [field]: field === 'guestCount' ? Number(raw) : raw,
      }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const result = await submitPrivatisation(values)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  return (
    <section className="bg-[#f7f7f0] w-full">
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-[32px] px-4 xl:px-[16px] py-4 xl:py-[16px]">

        {/* ── Form panel ── */}
        <div className="w-full xl:w-[569px] shrink-0 py-6 xl:py-8">

          {status === 'success' ? (
            <div className="flex flex-col gap-6 items-start py-12">
              <div className="w-12 h-12 rounded-full bg-[#5a4a6e]/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#5a4a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-['Libre_Baskerville',serif] text-[28px] text-[#181d27] tracking-[-2px] leading-[1.15]">
                  Request sent!
                </h2>
                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.4] tracking-[-0.48px]">
                  Thank you for your interest. Our team will review your request and get back to you
                  as soon as possible to confirm availability and discuss the details.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

              {/* ── Your Details ── */}
              <p className="font-['Libre_Baskerville',serif] text-[#58496c] text-[28px] leading-none tracking-[-2px]">
                Your Details
              </p>

              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <FieldLabel>Your first name*</FieldLabel>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Alexandre"
                    value={values.firstName}
                    onChange={set('firstName')}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FieldLabel>Your name*</FieldLabel>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Bourgeois"
                    value={values.lastName}
                    onChange={set('lastName')}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <FieldLabel>Your phone number*</FieldLabel>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+00 000 000 0000"
                    value={values.phone}
                    onChange={set('phone')}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FieldLabel>Your Email*</FieldLabel>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={values.email}
                    onChange={set('email')}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Company name */}
              <div className="relative">
                <FieldLabel>Company name</FieldLabel>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Entreprise name"
                  value={values.companyName}
                  onChange={set('companyName')}
                  className={inputClass}
                />
              </div>

              {/* Separator */}
              <div className="border-t border-[rgba(88,73,108,0.12)]" />

              {/* ── Event Details ── */}
              <p className="font-['Libre_Baskerville',serif] text-[#58496c] text-[28px] leading-none tracking-[-2px]">
                Event Details
              </p>

              {/* Event type */}
              <div className="relative">
                <FieldLabel>{`Type d'évènement*`}</FieldLabel>
                <input
                  id="eventType"
                  type="text"
                  required
                  placeholder="Corporate event, association visit, school group, family event, private tour..."
                  value={values.eventType}
                  onChange={set('eventType')}
                  className={inputClass}
                />
              </div>

              {/* Departure location + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <FieldLabel>{`Lieu de départ souhaité*`}</FieldLabel>
                  <select
                    id="departureLocation"
                    required
                    title="Lieu de départ souhaité"
                    aria-label="Lieu de départ souhaité"
                    value={values.departureLocation}
                    onChange={set('departureLocation')}
                    className={selectClass}
                  >
                    <option value="" disabled>Ménec car park, Carnac</option>
                    <option value="menec">Ménec car park, Carnac</option>
                    <option value="kermario">Kermario car park</option>
                    <option value="carnac-ville">Carnac centre</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#5a4a6e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <FieldLabel>{`Heure de départ souhaitée*`}</FieldLabel>
                  <input
                    id="departureTime"
                    type="time"
                    required
                    title="Heure de départ souhaitée"
                    aria-label="Heure de départ souhaitée"
                    value={values.departureTime}
                    onChange={set('departureTime')}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Date + Guest count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <FieldLabel>Date de votre évènement</FieldLabel>
                  <input
                    id="eventDate"
                    type="date"
                    required
                    title="Date de votre évènement"
                    aria-label="Date de votre évènement"
                    value={values.eventDate}
                    onChange={set('eventDate')}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FieldLabel>
                    {`Nombre d'invités`}{' '}
                    <span className="text-[10px] text-[rgba(88,73,108,0.55)] font-normal">(min. 10 guests)</span>
                  </FieldLabel>
                  <input
                    id="guestCount"
                    type="number"
                    required
                    min={10}
                    placeholder="ex: 10 - 15, 25 - 35..."
                    value={values.guestCount || ''}
                    onChange={set('guestCount')}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Additional info */}
              <div className="relative">
                <FieldLabel>Autres informations</FieldLabel>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  placeholder="Demandes particulières, contraintes horaires, langue préférée ou autres détails"
                  value={values.additionalInfo}
                  onChange={set('additionalInfo')}
                  className={`${textareaClass} min-h-[120px]`}
                />
              </div>

              {/* Info note */}
              <p className="font-['Roboto',sans-serif] text-[#5a4a6e] text-[13px] leading-[1.4] tracking-[-0.3px] max-w-[354px]">
                ⓘ Plus vous nous fournissez de détails, mieux nous pourrons répondre à votre demande
              </p>

              {/* Error message */}
              {status === 'error' && errorMsg && (
                <div className="bg-red-50 border border-red-200 rounded-[6px] px-4 py-3">
                  <p className="font-['Roboto',sans-serif] text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap w-fit disabled:opacity-60 transition-opacity"
              >
                {status === 'loading' ? 'Sending…' : 'Envoyer la demande'}
              </button>
            </form>
          )}
        </div>

        {/* ── Image panel — after form in DOM so it appears below form on mobile;
             xl:order-first moves it to the left column on desktop ── */}
        <div className="xl:order-first xl:flex-1 relative min-h-[300px] sm:min-h-[420px] xl:min-h-[620px] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.15)]">
          <Image
            src="/figma-assets/PrivatisationHero.jpg"
            alt="Privatization of the Petit Train de Carnac"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1280px) 746px, 100vw"
            priority
          />
          {/* Purple overlay */}
          <div className="absolute inset-0 bg-[rgba(88,73,108,0.5)]" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 xl:p-8 flex flex-col gap-4 xl:gap-6">
            {/* Google review badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-[8px] px-2 py-1.5 w-fit">
              <div className="relative w-6 h-6 shrink-0">
                <Image src="/figma-assets/google-icon.svg" alt="Google" fill className="object-contain" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-['Nunito',sans-serif] font-bold text-[14px] text-black tracking-[-0.42px]">4,7</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L7.545 4.09L11 4.545L8.5 6.98L9.09 10.42L6 8.795L2.91 10.42L3.5 6.98L1 4.545L4.455 4.09L6 1Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-['Nunito',sans-serif] text-[11px] text-black/60 tracking-[-0.33px]">6,000+ reviews</p>
              </div>
            </div>

            {/* Section label */}
            <div className="flex items-center gap-2">
              <div className="relative shrink-0 w-[19px] h-[19px]">
                <Image src="/figma-assets/icon-train-white.svg" alt="" fill className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-[#f7f7f0] text-base leading-6 tracking-[-0.48px]">
                Privatization &amp; B2B hire
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-['Libre_Baskerville',serif] text-[32px] xl:text-[48px] leading-[1.1] tracking-[-2.5px] xl:tracking-[-3.36px] text-[#f7f7f0] max-w-[537px]">
              Privatize the <em>Petit Train de Carnac</em> for your event
            </h1>

            {/* Description */}
            <p className="hidden xl:block font-['Roboto',sans-serif] text-[rgba(247,247,240,0.7)] text-base leading-[1.2] tracking-[-0.48px] max-w-[500px]">
              The Petit Train de Carnac can be privatized for group visits, corporate events, and
              special occasions. This flexible solution allows you to offer your guests a guided
              sightseeing tour through Carnac in a comfortable and original way, adapted to your
              needs and schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
