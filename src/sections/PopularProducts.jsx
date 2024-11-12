import React from 'react'
import { products, shoes } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className=' w-full flex flex-col  max-container max-sm:mt-12'>

      <div className='flex flex-col justify-start gap-5'>
        <p className='font-palanquin font-bold text-4xl'>Our <span className='text-coral-red'> popular </span> Products </p>
        <p className='font-montserrat text-slate-gray lg:max-w-lg'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      


      <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 
      gap-4 sm:gap-14 mt-16'>

           {products.map((product) => (

            <PopularProductCard key={product.name} {...product} />
             
            
          ) )
          }
    

      </div>

      

    </section>
  )
}

export default PopularProducts