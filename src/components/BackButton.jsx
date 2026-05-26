import React from 'react'
import backbtn from '../assets/backbtn.svg'
import { useNavigate } from 'react-router-dom'

function BackButton({ label = 'Back', to = '/' }) {
  const navigate = useNavigate()

  function handleClick() {
    if (to) {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  return (
    <button 
      className="group absolute bottom-8 left-8 flex items-center gap-4 bg-transparent p-0 text-[12px] font-semibold uppercase tracking-wide text-[#1a1b1c]"
      onClick={handleClick}
    >
      <span className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute h-9 w-9 rotate-45 border border-black"></span>
        <span className="absolute h-9 w-9 rotate-45 border border-dotted border-gray-400 opacity-0 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:opacity-100"></span>
        <img
          src={backbtn}
          alt=""
          className="relative z-10 h-3 w-3 -translate-x-[1px] transition-transform duration-300 group-hover:scale-75"
        />
      </span>
      <span>{label}</span>
    </button>
  )
}

export default BackButton
