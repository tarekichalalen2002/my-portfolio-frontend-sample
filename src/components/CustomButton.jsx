import React from 'react'

function CustomButton({handleClick,isFilled,text}) {
    const bgGradiant = "bg-gradient-to-r from-[#0794D0] via-blue-800  to-[#9E00FF]"
  return (
    <div
    className={`
    ${!isFilled && bgGradiant}
    rounded-full relative z-[-1] p-[4px]
    `}
    >
        <button
        onClick={handleClick}
        className={`
        ${isFilled ? bgGradiant  : "bg-[#010014]"}
        py-[10px] px-[20px]
        rounded-full w-full h-full flex justify-center items-center
        cursor-pointer
        `}
        >
            <span
            className={`${!isFilled && "text-transparent bg-clip-text "+ bgGradiant} font-bold text-[16px]`}
            >
                {text}
            </span>
        </button>
    </div>
  )
}

export default CustomButton