import React from 'react'
import {copyrightSign, truckFast} from '../assets/icons'
import {socialMedia} from '../constants'
import SocialMedia from '../components/SocialMedia'
import { footerLogo } from '../assets/images'
import Footerlinks from '../components/Footerlinks'
import {footerLinks} from '../constants'
const Footer = () => {
  return (
    <footer className='max-container bg-black '>
      
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col' >
        
        <div className='flex flex-col items-start'>

          <img src={footerLogo} className='w-[150px] h-[46px] mb-8' alt="logo" />

          <p className='text-base text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. 
            Find Your perfect Size In Store. Get Rewards </p>
        
          <div className='flex  gap-5 items-center mt-8'>
            {socialMedia.map((link) => (
              <SocialMedia key={link.alt} {...link} />
            ))}
          </div>
        
        </div>

        <div className='mt-5 flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((link) => (
          <Footerlinks key={link.title} {...link} />
        ))}
        </div>

      </div>

      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex gap-4 justify-start items-center cursor-pointer'>
            <img src={copyrightSign} alt="copyrightsign" />
            <p className='text-slate-gray font-montserrat'>Copyright. All rights reserved.</p>
          </div>

          <p className='cursor-pointer text-slate-gray font-montserrat'>Terms & Conditions.</p>
        </div>

    </footer>
  )
}

export default Footer