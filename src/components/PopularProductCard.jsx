import React from 'react'

const PopularProductCard = ({imgURL, name, price, star}) => {
  return (
    <div className='flex flex-1 flex-col w-full'>

        <img src={imgURL} alt="shoe" className='mb-8 w-[280px] h-[280px]'/>
           
        <div className='flex gap-3 justify-start '>
            <img src={star} alt="rating" />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>

        <p className='mt-2 font-palanquin leading-normal font-semibold text-2xl'>{name}</p>
        <p className='mt-3 font-montserrat leading-normal text-2xl font-semibold text-coral-red'>{price}</p>

    </div>
  )
}

export default PopularProductCard