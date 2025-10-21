import React from 'react'

const CTA = ({text}) => {
  return (
    <div className='w-fit'>
      <button className='w-full cursor-pointer px-7 py-2 bg-linear-to-r from-black via-black/90 to-black/85 text-white rounded-lg hover:scale-105 transition-all duration-200 whitespace-nowrap'>{text}</button>
    </div>
  )
}

export default CTA