import React, { useState } from 'react'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'
import NextButton from '../components/NextButton'

const PHASE_ONE_API =
  'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne'

const namePattern = /^(?=.{2,60}$)[A-Za-z][A-Za-z\s.'-]*$/
const locationPattern = /^(?=.{2,80}$)[A-Za-z][A-Za-z\s,.'-]*$/

const IntroForm = () => {
  const [step, setStep] = useState('name')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isLocationStep = step === 'location'
  const isThanksStep = step === 'thanks'

  function validateName(value) {
    return namePattern.test(value.trim())
  }

  function validateLocation(value) {
    return locationPattern.test(value.trim())
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (step === 'name') {
      if (!validateName(name)) {
        setError('Please enter a valid name using letters only.')
        return
      }

      setStep('location')
      return
    }

    if (step === 'location') {
      if (!validateLocation(location)) {
        setError('Please enter a valid location using letters only.')
        return
      }

      const customerData = {
        name: name.trim(),
        location: location.trim(),
      }

      try {
        setIsSubmitting(true)

        const response = await fetch(PHASE_ONE_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(customerData),
        })

        if (!response.ok) {
          throw new Error('Unable to save customer data.')
        }

        localStorage.setItem('skinstricCustomer', JSON.stringify(customerData))
        setStep('thanks')
      } catch {
        setError('Something went wrong. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <>
      <Nav showEnterCode={false} />

      <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1b1c]">
        <p className="absolute left-8 top-[86px] text-[16px] font-semibold leading-none text-[#1a1b1c] uppercase">
          To start analysis
        </p>

        <section className="absolute left-1/2 top-1/2 flex h-[min(520px,80vw)] w-[min(520px,80vw)] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="animate-diamond-fast pointer-events-none absolute h-[min(360px,56vw)] w-[min(360px,56vw)] border border-dotted border-[#1a1b1c]/55"></div>
          <div className="animate-diamond-medium pointer-events-none absolute h-[min(420px,66vw)] w-[min(420px,66vw)] border border-dotted border-[#1a1b1c]/35"></div>
          <div className="animate-diamond-slow pointer-events-none absolute h-[min(480px,76vw)] w-[min(480px,76vw)] border border-dotted border-[#1a1b1c]/20"></div>

          {isThanksStep ? (
            <div className="relative z-10 flex w-[min(360px,72vw)] flex-col items-center text-center">
              <p className="mb-4 text-[28px] font-normal leading-none text-[#1a1b1c]">
                Thank you!
              </p>
              <p className="text-[14px] font-normal leading-none text-[#8d8d8d]">
                Proceed for the next step
              </p>
            </div>
          ) : (
            <form
              className="relative z-10 flex w-[min(360px,72vw)] flex-col items-center text-center"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="name"
                className="mb-3 text-[14px] font-normal leading-none text-[#8d8d8d]"
              >
                {isLocationStep ? 'Where are you from?' : 'Click to type'}
              </label>

              <input
                id="name"
                type="text"
                value={isLocationStep ? location : name}
                onChange={(event) => {
                  if (isLocationStep) {
                    setLocation(event.target.value)
                  } else {
                    setName(event.target.value)
                  }
                }}
                placeholder={isLocationStep ? 'Enter your location' : 'Introduce yourself'}
                disabled={isSubmitting}
                className="w-full border-0 border-b border-[#1a1b1c] bg-transparent px-2 pb-2 text-center text-[24px] font-normal leading-none text-[#1a1b1c] outline-none placeholder:text-[#1a1b1c] focus:border-[#1a1b1c] md:text-[28px]"
              />
              {error && (
                <p className="mt-4 max-w-[320px] text-center text-[12px] font-semibold uppercase leading-[1.4] tracking-wide text-red-600">
                  {error}
                </p>
              )}
              {isSubmitting && (
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-[#8d8d8d]">
                  Saving...
                </p>
              )}
            </form>
          )}
        </section>

        <BackButton />
        {isThanksStep && <NextButton />}
      </main>
    </>
  )
}

export default IntroForm
