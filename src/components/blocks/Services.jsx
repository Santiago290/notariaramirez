import React from 'react'
import Container from '../layout/Container'
import Boton from '../ui/Boton'
import { service } from "../../data/Servicios.js"
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <Container my='my-[50px]' w='w-[280px] xs:w-[320px] smd:w-[500px] lg:w-[900px] xl:w-[1150px]'>
        <div className="mb-9 md:mb-18 text-center">
          <div className="title text-[23px] md:text-4xl leading-none">
            ¿Qué trámites deseas realizar hoy?
           </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {service.map((item, i) => (
              <div key={i} className="w-[156px] h-[220px] md:w-[265.99px] md:h-[374px] rounded-2xl overflow-hidden flex flex-col items-center justify-between">
                <div className="w-full h-[60%] bg-gradient-to-r from-[#010000] to-[#7C0600] flex items-center justify-center">
                  <img src={item.icono} alt={item.titulo} className="w-[72px] h-[56px] md:w-[123px] md:h-[96px] object-contain"/>
                </div>

                <div className="w-full h-[40%] bg-crema flex flex-col justify-center items-center py-2 px-3 md:px-6 text-center gap-2 md:gap-4">
    
                  <div className="h-[40px] md:h-[70px] flex items-center justify-center">
                    <h3 className={`leading-3 md:leading-tight text-center whitespace-pre-line font-semibold
                        ${item.titulo.includes("Legalizaciones") || item.titulo.includes("Constitución")
                          ? "text-[9.5px] md:text-[16px]"
                          : "text-[13px] md:text-[22px]"
                        }`}> {item.titulo}</h3>
                  </div>
                  <Link key={item.slug}  to={`/servicios/${item.slug}`}>
                    <Boton texto="Ver más" textSize="text-[11px] md:text-[18px]" textColor="text-rojo" fontWeight="font-normal" bg="bg-white" px="px-2 md:px-4" py="py-1" className='hover:bg-rojo hover:text-white hover:border-rojo ease-in-out'/>
                  </Link>      
                </div>
              </div>
            ))}
          </div>
        </div>
    </Container>    
  )
}

export default Services