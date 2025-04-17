import React from 'react'

function CommonButton({innerText}) {
  return (
    <button className="flex relative z-[100] items-center group  bg-gradient-to-b transition-all  cursor-pointer  border-[1px] border-white/20 from-white/25 via-white/10 hover:via-white/10 to-white/15  gap-2 outline-4 px-3.5 py-2 rounded-lg hover:outline-white/15 outline-background01">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-white/75 transition-all duration-200 group-hover:text-white/90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
      <h4 className="text-[15px] group-hover:text-white/90 text-white/75  transition-all duration-200 hover:text-white/85 font-medium">{innerText}</h4>
    </button>
  )
}

export default CommonButton