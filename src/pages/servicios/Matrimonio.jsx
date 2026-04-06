import React, {useState} from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from "../../components/blocks/Hero"
import Cita from '../../components/blocks/Cita'
import { service } from "../../data/Servicios.js";
import Container from '../../components/layout/Container.jsx'
import { useParams } from 'react-router-dom'
import BotonWhatsApp from '../../components/ui/BotonWhatsApp.jsx'


const Matrimonio = () => {

  const [abierto, setAbierto] = useState(null);
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
            <div className='flex flex-col gap-5 md:gap-12'>
              <div className='flex flex-col gap-3 md:gap-6'>
                {servicio.requisitos?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <p className="text-[13px] md:text-xl">
                      <span className="text-rojo">{item.split(" ")[0]}</span> {item.split(" ").slice(1).join(" ")}
                    </p>
                  </li>
                ))}
              </div>

              <div className="w-full flex flex-col gap-0 sm:gap-1">
                {servicio.secciones?.map((item, i) => (
                  <div key={i} className="mb-3">
                    <div onClick={() => setAbierto(abierto === i ? null : i)} className="bg-gris-muy-claro flex justify-between items-center px-6 py-2 rounded-[20px] xl:rounded-full cursor-pointer font-bold text-sm md:text-xl">
                      {item.titulo}
                      <span className={`transition-transform duration-300 text-sm text-rojo ${ abierto === i ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 px-6 flex flex-col gap-3 md:gap-6  ${ abierto === i ? " opacity-100 my-4 md:my-7"  : "max-h-0 opacity-0" }`} >
                        {item.items?.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <p className="text-[13px] md:text-xl">
                              <span className="text-rojo">{req.split(" ")[0]}</span> {req.split(" ").slice(1).join(" ")}
                            </p>
                          </li>
                        ))}
                    </div>
                  </div>
                ))}
              </div> 
            </div>

          </Container>
        </div> 

        <Cita></Cita>
        <Footer></Footer>
        <BotonWhatsApp />
    </>
  )
}

export default Matrimonio