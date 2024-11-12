import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='w-full gap-10 flex max-lg:flex-col  justify-between items-center max-container  '>
     
      <div className='flex flex-1 flex-col '>
        
        
        <h1 className='mt-10 font-palanquin text-4xl font-bold lg:max-w-lg '> We Provide You
          
          <span className='text-coral-red '> Super Quality </span>
            Shoes
        </h1>

        <p className=' info-text mt-4 lg:max-w-lg'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p> 

        <p className=' info-text mt-6 lg:max-w-lg'>
          Our dedication to quality is evident in every pair of shoes we produce.
        </p>

        <div className='mt-11'>
          <Button label='View details' />  
        </div>
        
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe8" width={600} className='object-contain' />
      </div>
        
      

    </section>

  )
}

export default SuperQuality