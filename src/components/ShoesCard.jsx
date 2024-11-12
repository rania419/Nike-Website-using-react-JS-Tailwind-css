import React from 'react'

const ShoesCard = ({imgURL, changeshoesImg, bigShoeImg}) => {

  const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
          changeshoesImg(imgURL.bigShoe)
        }
      }
    
    
      return (
        <div className={`border-2 rounded-xl 
          ${bigShoeImg === imgURL.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'} 
            cursor-pointer 
            max-sm:flex-1`}

             onClick={handleClick}>

              <div className='flex justify-center items-center bg-card bg-center bg-cover
              sm:w-40 sm:h-40 rounded-xl max-sm:mp-4'>
                <img src={imgURL.thumbnail} alt='shoe'
                width={127}
                height={103}
                className='object-contain'/>
              </div>
    
        </div>
      )
}

export default ShoesCard


