const Nav = ({ showEnterCode = true, section = 'INTRO' }) => {
  return (
    <nav className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 md:px-8'>

      <div className='flex items-center gap-4'>
        <h1 className='text-[12px] font-semibold text-black tracking-wider md:text-[14px]'>
          SKINSTRIC
        </h1>

          <span className='text-[10px] font-semibold uppercase tracking-wide text-[#1a1b1c]'>
            [ {section} ]
          </span>

      </div>

        {showEnterCode && (
          <button className='bg-black px-3 py-2 text-[10px] font-semibold tracking-wide text-white md:px-4'>
            Enter Code
          </button>
        )}
    </nav>
  )
}

export default Nav
