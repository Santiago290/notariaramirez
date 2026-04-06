import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from "../components/blocks/Hero"
import Services from '../components/blocks/Services'
import Location from '../components/blocks/Location'
import Cita from '../components/blocks/Cita'
import imgNotaria from "../assets/images/imgNotaria.jpg";
import Boton from '../components/ui/Boton'
import Typing from '../components/ui/Typing'
import BotonWhatsApp from '../components/ui/BotonWhatsApp'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero image={imgNotaria}>
        <h1 className="font-[Choplin] font-light text-[21px] sm:text-4xl md:text-5xl lg:text-[62px] leading-5 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
          Nuestra razón <br />
          de ser es su <span className="font-semibold">seguridad</span> <br />
          y <span className="font-semibold">confianza</span>
        </h1>
        <Boton textSize="text-[10px] md:text-[25px]" placeholder='text-rojo' textColor="text-white" fontWeight="font-bold" border="border border-yellow-400" bg="bg-transparent" width='w-[152px] md:w-[370px]' height='h-[23px] md:h-[57px]' px='px-0' py='py-0' className="m-auto">
          <Typing />
        </Boton>
      </Hero>
      <Services></Services>
      <Location></Location>
      <Cita></Cita>
      <Footer></Footer>
      <BotonWhatsApp />
    </>
  )
}

export default Home