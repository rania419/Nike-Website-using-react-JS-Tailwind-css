import React from 'react'

const ReviewsCards = ({imgURL, customerName, rating, feedback, star}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-20 '>
      <img src={imgURL} className='rounded-full w-[150px] object-cover mb-6' alt="image" />
      <p className='max-w-sm text-center font-montserrat text-slate-gray'>{feedback}</p>
      
      <div className='flex gap-3 mt-4 justify-center '>
        <img className='items-center' src={star} alt="star" />
        <p className='text-center font-montserrat leading-normal  text-xl text-slate-gray'>({rating})</p>
        
      </div>

  
      <h2 className='mt-1 font-bold text-2xl font-palanquin'>{customerName}</h2>
    </div>
  )
}

export default ReviewsCards