import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/blocks/Hero'
import imgServicios from "../assets/images/imgServicios.jpg"
import Services from '../components/blocks/Services'
import Cita from '../components/blocks/Cita'
import BotonWhatsApp from '../components/ui/BotonWhatsApp'

const Servicios = () => {
  return (
    <>
        <Navbar></Navbar>
        <Hero image={imgServicios}>
            <h1 className="font-[Choplin] font-light text-[21px] sm:text-3xl md:text-5xl lg:text-[62px] leading-5 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
                <span className="font-semibold">Encuentra</span> el<br /> servicio notarial que<br /> <span className="font-semibold">necesitas </span>
            </h1>
        </Hero>
        <Services></Services>
        <Cita></Cita>
        <Footer></Footer>
        <BotonWhatsApp />
    </>
  )
}

export default Servicios