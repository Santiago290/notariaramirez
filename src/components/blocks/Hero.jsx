import React from 'react'

const Hero = ({ image, children }) => {
  return (
    <section className="relative h-50 smd:h-130 md:h-175 bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})`,}}/>
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />
      <div className="relative z-10 text-white text-center">
        {children}
      </div>
    </section>
  )
}

export default Hero
