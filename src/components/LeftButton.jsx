import React from 'react'
import leftbtn from "../assets/backbtn.svg";

function LeftButton({ onClick, onMouseEnter, onMouseLeave, isHidden }) {
  return (
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`group fixed left-8 top-1/2 z-10 -translate-y-1/2 transition-opacity duration-300 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}>
      <div className="pointer-events-none absolute left-[-190px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rotate-45 border border-dotted border-gray-500"></div>
      <div className="pointer-events-none absolute left-[-235px] top-1/2 h-[410px] w-[410px] -translate-y-1/2 rotate-45 border border-dotted border-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="pointer-events-none absolute left-[-280px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rotate-45 border border-dotted border-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <button
        onClick={onClick}
        className="relative flex items-center gap-4 bg-transparent p-0 text-[12px] font-semibold uppercase tracking-wide text-black"
      >
        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute h-9 w-9 rotate-45 border border-black"></span>
          <span className="absolute h-9 w-9 rotate-45 border border-dotted border-gray-350 opacity-0 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:opacity-100"></span>
          <img
            src={leftbtn}
            alt=""
            className="relative z-10 h-3 w-3 -translate-x-[1px] transition-transform duration-300 group-hover:scale-75"
          />
        </span>

        <span>Discover A.I.</span>
      </button>
    </div>
  );
}

export default LeftButton;