import React from 'react'
import LeftButton from '../components/LeftButton'
import ProceedButton from '../components/ProceedButton'
import { useState } from 'react'
import Nav from '../components/Nav'

function Landing() {
  const [hoveredSide, setHoveredSide] = useState(null);

  const titlePosition =
  hoveredSide === "left"
    ? "left-auto right-8 translate-x-0"
    : hoveredSide === "right"
    ? "left-8 right-auto translate-x-0"
    : "left-1/2 -translate-x-1/2";

  const titleAlign =
  hoveredSide === "left"
    ? "text-right"
    : hoveredSide === "right"
    ? "text-left"
    : "text-center";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] text-black">
       <Nav showEnterCode={true} />
        <section
            className={`absolute top-1/2 max-w-[720px] -translate-y-1/2 text-center text-[56px] font-normal leading-none transition-all duration-500 ease-out md:text-[72px] ${titlePosition}`}
        >
            <h1 className={`absolute top-1/2 max-w-[720px] -translate-y-1/2 text-[56px] font-normal leading-none transition-all duration-500 ease-out md:text-[72px] ${titlePosition} ${titleAlign}`}>
                Sophisticated
                <br />
                skincare
            </h1>
        </section>

        <p className='fixed bottom-8 left-8 max-w-[280px] text-[12px] font-semibold uppercase leading-[1.6] tracking-wide '>
            Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
        </p>

         <LeftButton
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        isHidden={hoveredSide === "right"}
      />

      <ProceedButton
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        isHidden={hoveredSide === "left"}
      />
        
    </main>
  )
}

export default Landing