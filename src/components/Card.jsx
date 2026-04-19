import React from 'react'

const Card = (props) => {
  return (
    <>
   <div className='border p-6 w-80 md:w-100 rounded-2xl border-gray-400  bg-[#131313] hover:border-[#7b2cbf] hover:text-[#7b2cbf]'>
     <div className='flex justify-between py-2 px-4'>
        <div className='text-[#3c096c] italic text-3xl font-extrabold'>{props.count}</div>
        <div>{props.img}</div>
    </div>
    <div className='p-4'>
        <div className='text-2xl md:text-3xl pb-4 font-[about-text] '>{props.title}</div>
        <div className='text-xl text-gray-400 font-mono'>{props.content}</div>
    </div>
   </div>
    </>
  )
}

export default Card