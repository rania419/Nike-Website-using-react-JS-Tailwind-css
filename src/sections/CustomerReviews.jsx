import React from 'react'
import { reviews } from '../constants'
import ReviewsCards from '../components/ReviewsCards'
const CustomerReviews = () => {
  return (
    <section className='w-full max-container justify-center items-center  '>
      
      <div className='flex flex-col items-center'>
        <h2 className='capitalize font-palanquin font-bold text-4xl text-center'>
          What Our 
          <span className='text-coral-red'> Customers </span> Say?
        </h2>
        <p className='mt-6 font-montserrat text-slate-gray max-w-lg  text-center '>Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      </div>


      <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  '>
        
        {reviews.map((review) => (

          <ReviewsCards key={review.customerName} {...review} />
        ))}
        
        
      </div>
    </section>
  )
}

export default CustomerReviews