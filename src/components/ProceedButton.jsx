import React from 'react'
import proceedbtn from "../assets/proceedbtn.svg";
import { Link } from 'react-router-dom'

function ProceedButton({
  label = 'Take Test',
  to = '/intro',
  onClick,
  onMouseEnter,
  onMouseLeave,
  isHidden,
}) {
  return (
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`group fixed right-8 top-1/2 z-10 -translate-y-1/2 transition-opacity duration-300 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}>
      <div className="pointer-events-none absolute right-[-190px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rotate-45 border border-dotted border-gray-500"></div>
      <div className="pointer-events-none absolute right-[-235px] top-1/2 h-[410px] w-[410px] -translate-y-1/2 rotate-45 border border-dotted border-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="pointer-events-none absolute right-[-280px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rotate-45 border border-dotted border-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <Link
        to={to}
        onClick={onClick}
        className="relative z-10 flex items-center gap-4 bg-transparent p-0 text-[12px] font-semibold uppercase tracking-wide text-black"
      >
        <span>{label}</span>

        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute h-9 w-9 rotate-45 border border-black"></span>
          <span className="absolute h-9 w-9 rotate-45 border border-dotted border-gray-400 opacity-0 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:opacity-100"></span>
          <img
            src={proceedbtn}
            alt=""
            className="relative z-10 h-3 w-3 translate-x-[1px] transition-transform duration-300 group-hover:scale-75"
          />
        </span>
      </Link>
    </div>
  );
}

export default ProceedButton;
