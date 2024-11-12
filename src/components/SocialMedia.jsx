import React from 'react'

const SocialMedia = ({src, alt}) => {
  return (
    <div className='flex  justify-center items-center w-12 h-12 '>
        <div className='bg-white p-2  rounded-full'>
            <img src={src} alt={alt}  />
        </div>
    </div>
  )
}

export default SocialMedia