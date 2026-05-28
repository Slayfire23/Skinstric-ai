const Nav = ({ showEnterCode = true, section = 'INTRO', variant = 'dark' }) => {
  const isLight = variant === 'light'

  return (
    <nav className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 md:px-8'>

      <div className='flex items-center gap-4'>
        <h1 className={`text-[12px] font-semibold tracking-wider md:text-[14px] ${isLight ? 'text-white' : 'text-black'}`}>
          SKINSTRIC
        </h1>

          <span className={`text-[10px] font-semibold uppercase tracking-wide ${isLight ? 'text-white/80' : 'text-[#1a1b1c]'}`}>
            [ {section} ]
          </span>

      </div>

        {showEnterCode && (
          <button className={`px-3 py-2 text-[10px] font-semibold tracking-wide md:px-4 ${isLight ? 'bg-white text-[#1a1b1c]' : 'bg-black text-white'}`}>
            Enter Code
          </button>
        )}
    </nav>
  )
}

export default Nav
