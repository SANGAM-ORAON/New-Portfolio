import React from 'react'

const Box = (props) => {
  return (
    <div className="
      w-[85vw] sm:w-72 md:w-80 
      min-h-95 md:min-h-105
      border rounded-2xl p-3 mx-auto
      border-gray-400 bg-[#131313]
      hover:border-[#7b2cbf] hover:text-[#7b2cbf]
      transition-all duration-300

      flex flex-col   /* ✅ important */
    ">

      {/* IMAGE */}
      <div className="h-36 sm:h-40 md:h-44">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={props.img}
          alt="project_pic"
        />
      </div>

      {/* TAGS */}
      <div className="mt-2 text-[#faf9f9] text-center font-mono flex flex-wrap justify-center gap-2">
        <span className="border rounded-2xl px-3 py-1 text-xs sm:text-sm">{props.one}</span>
        <span className="border rounded-2xl px-3 py-1 text-xs sm:text-sm">{props.two}</span>
        <span className="border rounded-2xl px-3 py-1 text-xs sm:text-sm">{props.three}</span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center p-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl mt-3 text-center font-[naam]">
          {props.title}
        </h2>

        <p className="mt-2 text-gray-400 text-sm sm:text-base font-[naam] text-center leading-relaxed">
          {props.detail}
        </p>
      </div>

      {/* BUTTON */}
     <a
  href={props.link}
  target="_blank"
  // rel="noopener noreferrer"
  className="
    mt-auto
    w-full sm:w-auto
    flex justify-center items-center mx-auto
    rounded-3xl py-2 px-4
    text-sm sm:text-base
    text-[#faf9f9]
    bg-[#3c096c]
    hover:bg-transparent hover:border hover:border-gray-400
    transition-all duration-300
  "
>
  Visit
</a>

    </div>
  )
}

export default Box