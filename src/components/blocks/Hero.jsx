import React from 'react'

const Hero = ({ image, imageAlt = "", children }) => {
  return (
    <section className="relative h-95 smd:h-130 md:h-175 flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/40" />
      <div className="relative z-10 text-white text-center">
        {children}
      </div>
    </section>
  )
}

export default Hero
