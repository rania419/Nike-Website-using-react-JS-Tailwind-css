import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images/index'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='max-container flex max-xl:flex-col-reverse w-full items-center gap-10 justify-wrap xl:pb-[200px]'>

      <div className='flex-1  md:w-[600px]  sm:w-[400px] lg:w-[780px] h-[600px]'>

          <img src={offer} alt="offer" className='w-full object-contain' />

      </div>
      
      <div className='flex flex-col'>

        <h2 className='text-4xl font-palanquin font-bold '>
          <span className='text-coral-red'> Special </span> Offer
        </h2>
        
        <div className='mt-6 info-text lg:max-w-lg '>
          <p >Embank on shopping dernier that redifoncis her expériences with ambitable dies from primer selections de Incredible savings of empruntdown Will You that set has a part </p>
          <p>navicator rell of possible ties The Signs To ful euro unic dessiars surpassent love test expeciatas. Or journey with as is Nothing's short of  Exceptional.</p>
        
        </div>

        <div className='flex flex-wrap mt-14 gap-6'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button 
          backgroundColor="bg-white" 
          borderColor="border-slate-gray" 
          textColor="text-slate-gray"


          label='Learn more' />
        </div>

       

         

      </div>

    </section>
  )
}

export default SpecialOffer