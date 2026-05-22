import React from 'react'

const Nav = () => {
  return (
    <nav className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-8 py-5'>

      <div className='flex items-center gap-4'>
        <h1 className='text-[14px] font-semibold text-black tracking-wider font-14px'>
          SKINSTRIC
        </h1>

          <span className='text-[10px] font-semibold uppercase tracking-wide text-[#1a1b1c]'>
            [ INTRO ]
          </span>

      </div>

      <button className='bg-black px-4 py-2 text-[10px] font-semibold tracking-wide text-white '>
        Enter Code
      </button>
    </nav>
  )
}

export default Nav