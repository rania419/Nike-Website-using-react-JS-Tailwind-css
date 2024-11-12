import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='max-container flex max-lg:flex-col gap-10 items-center justify-between '>
       
       <h1 className='font-palanquin capitalize font-bold text-4xl text-center'>sign up for 
        <span className='text-coral-red'> updates </span> & newsletter
       </h1>

        
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          
          <input type="email" placeholder='subscribe@nike.com' className='input'/> 
          
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' />
          </div>
          
          

        </div> 
    </section>
  )
}

export default Subscribe