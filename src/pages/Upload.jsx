import React from 'react'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'

const Upload = () => {
  return (
    <>
      <Nav showEnterCode={false} />

      <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1b1c]">
        <p className="absolute left-8 top-[86px] text-[16px] font-semibold uppercase leading-none text-[#1a1b1c]">
          To start analysis
        </p>

        <section className="absolute left-1/2 top-1/2 flex w-full max-w-[900px] -translate-x-1/2 -translate-y-1/2 items-center justify-between px-8">
          <button className="group relative flex h-[220px] w-[220px] items-center justify-center bg-transparent">
            <span className="absolute h-[150px] w-[150px] rotate-45 border border-dotted border-[#1a1b1c]/55"></span>
            <span className="absolute h-[190px] w-[190px] rotate-45 border border-dotted border-[#1a1b1c]/30"></span>
            <span className="relative z-10 text-center text-[12px] font-semibold uppercase leading-[1.5] tracking-wide">
              Allow A.I.
              <br />
              to access camera
            </span>
          </button>

          <button className="group relative flex h-[220px] w-[220px] items-center justify-center bg-transparent">
            <span className="absolute h-[150px] w-[150px] rotate-45 border border-dotted border-[#1a1b1c]/55"></span>
            <span className="absolute h-[190px] w-[190px] rotate-45 border border-dotted border-[#1a1b1c]/30"></span>
            <span className="relative z-10 text-center text-[12px] font-semibold uppercase leading-[1.5] tracking-wide">
              Allow A.I.
              <br />
              to access gallery
            </span>
          </button>
        </section>

        <BackButton to="/intro" />
      </main>
    </>
  )
}

export default Upload
