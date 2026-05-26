import proceedbtn from '../assets/proceedbtn.svg'
import { useNavigate } from 'react-router-dom'

function NextButton({ label = 'Proceed', to = '/upload' }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(to)
  }

  return (
    <button
      className="group absolute bottom-5 right-5 flex items-center gap-3 bg-transparent p-0 text-[12px] font-semibold uppercase tracking-wide text-[#1a1b1c] md:bottom-8 md:right-8 md:gap-4"
      onClick={handleClick}
    >
      <span>{label}</span>
      <span className="relative flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
        <span className="absolute h-9 w-9 rotate-45 border border-black"></span>
        <span className="absolute h-9 w-9 rotate-45 border border-dotted border-gray-400 opacity-0 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:opacity-100"></span>
        <img
          src={proceedbtn}
          alt=""
          className="relative z-10 h-3 w-3 translate-x-[1px] transition-transform duration-300 group-hover:scale-75"
        />
      </span>
    </button>
  )
}

export default NextButton
