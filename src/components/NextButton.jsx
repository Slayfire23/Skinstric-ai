import proceedbtn from '../assets/proceedbtn.svg'
import { useNavigate } from 'react-router-dom'

function NextButton({
  label = 'Proceed',
  to = '/upload',
  variant = 'dark',
  position = 'bottom',
}) {
  const navigate = useNavigate()
  const isLight = variant === 'light'
  const positionClass =
    position === 'camera'
      ? 'right-5 top-1/2 -translate-y-1/2 md:right-8'
      : 'bottom-5 right-5 md:bottom-8 md:right-8'

  function handleClick() {
    navigate(to)
  }

  return (
    <button
      className={`group absolute z-40 flex items-center gap-3 bg-transparent p-0 text-[12px] font-semibold uppercase tracking-wide md:gap-4 ${positionClass} ${
        isLight ? 'text-white' : 'text-[#1a1b1c]'
      }`}
      onClick={handleClick}
    >
      <span>{label}</span>
      <span className="relative flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
        <span className={`absolute h-9 w-9 rotate-45 border ${isLight ? 'border-white' : 'border-black'}`}></span>
        <span
          className={`absolute h-9 w-9 rotate-45 border border-dotted opacity-0 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:opacity-100 ${
            isLight ? 'border-white/70' : 'border-gray-400'
          }`}
        ></span>
        <img
          src={proceedbtn}
          alt=""
          className={`relative z-10 h-3 w-3 translate-x-[1px] transition-transform duration-300 group-hover:scale-75 ${
            isLight ? 'invert' : ''
          }`}
        />
      </span>
    </button>
  )
}

export default NextButton
