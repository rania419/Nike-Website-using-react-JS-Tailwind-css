import React from 'react'

const Footerlinks = ({title, links}) => {
  return (
    <div className='flex flex-col '>
        <p className='text-white text-2xl font-montserrat mb-6 font-medium'>{title}</p>
       
        {links.map((link) => (
            <a key={link.name} href={link.link} className='py-1 font-medium  text-slate-gray font-montserrat'>
                {link.name}
            </a>
        ))}

        
        <a className='text-slate-gray'>{links.name}</a>
    </div>
    
  )
}

export default Footerlinks