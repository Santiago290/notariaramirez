import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from "../../components/blocks/Hero"
import Cita from '../../components/blocks/Cita'
import { service } from "../../data/Servicios.js";
import Container from '../../components/layout/Container.jsx'
import { useParams } from 'react-router-dom'
import Boton from '../../components/ui/Boton.jsx'
import BotonWhatsApp from '../../components/ui/BotonWhatsApp.jsx'


const Anticipo = () => {

  const { slug } = useParams();
  const servicio = service.find(s => s.slug === slug); 

  return (
    <>
        <Navbar />
        <Hero image={servicio.imagen}>
          <div className='flex flex-col items-center gap-4 smd:gap-7 md:gap-14'>
            <img 
              src={servicio.icono} 
              alt={servicio.titulo} 
              className="w-[72px] h-[56px] md:w-[123px] md:h-[96px] object-contain"
            />
            <Container>
              <h1 className="font-[Choplin] font-medium text-[24px] smd:text-[40px] md:text-[60px] lg:text-[75px] leading-5 smd:leading-none mb-3 sm:mb-5 md:mb-8">
                {servicio.titulo}
              </h1>
            </Container>
          </div>
        </Hero>

        <div className='w-full pt-10 md:pt-18'> 
          <Container><h2 className='title text-center text-black leading-7 md:leading-12 mb-7 sm:mb-10 md:mb-13'>¿Cuáles son los requisitos?</h2></Container>
        </div>

        <div className='w-full pt-0 md:pt-10'> 
          <Container>
            <div className='flex flex-col gap-3 md:gap-6'>
              {servicio.requisitos?.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <p className="text-[13px] md:text-xl">
                    <span className="text-rojo">{item.split(" ")[0]}</span> {item.split(" ").slice(1).join(" ")}
                  </p>
                </li>
              ))}

            </div> 
          </Container>
        </div> 

        <Cita></Cita>
        <Footer></Footer>
        <BotonWhatsApp />
    </>
  )
}

export default Anticipo