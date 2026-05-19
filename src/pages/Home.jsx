import React from 'react'
import Hero from "../components/blocks/Hero"
import Services from '../components/blocks/Services'
import Location from '../components/blocks/Location'
import imgNotaria from "../assets/images/imgNotaria.jpg";
import Boton from '../components/ui/Boton'
import { Link } from 'react-router'


const Home = () => {
  return (
    <>
      <Hero image={imgNotaria} imageAlt="Notaría Alejandro Ramírez Carranza en Lince">
        <h1 className="font-[Choplin] font-light text-[25px] sm:text-4xl md:text-5xl lg:text-[62px] leading-6 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
          Nuestra finalidad <br />
          es brindarle <span className="font-semibold"> <br /> seguridad</span>
        </h1>
        <Link to="/servicios">
          <Boton textSize="text-[12px] md:text-[27px]" textColor="text-white" fontWeight="font-bold" border="border border-yellow-400" bg="bg-transparent" width='w-[175px] md:w-[370px]' height='h-[23px] md:h-[57px]' px='px-0' py='py-0' className="hover:border-rojo hover:bg-rojo m-auto">
            Servicios a su alcance
          </Boton>
        </Link>
      </Hero>
      <Services></Services>
      <Location></Location>
    </>
  )
}

export default Home
