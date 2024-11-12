import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services, reviews } from '../constants'

const Services = () => {
  return (
    <section className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3   gap-10 lg:grid-cols-3    max-container'>

        {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
        ))}

    </section>
  )
}

export default Services


// grid sm:grid-cols-3 grid-cols-1 gap-9  max-container justify-center items-center