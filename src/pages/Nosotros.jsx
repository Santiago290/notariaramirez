import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Cita from '../components/blocks/Cita'
import Hero from '../components/blocks/Hero'
import imgFirma from "../assets/images/imgFirma.jpg";
import Container from '../components/layout/Container';
import iconoMision from "../assets/icons/mision.svg"
import iconoVision from "../assets/icons/vision.svg"
import BotonWhatsApp from '../components/ui/BotonWhatsApp'

const Nosotros = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero image={imgFirma}>
        <h1 className="font-[Choplin] font-light text-[21px] sm:text-3xl md:text-5xl lg:text-[62px] leading-5 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
          Nuestra razón <br />
          de ser es su <span className="font-semibold">seguridad</span> <br />
          y <span className="font-semibold">confianza</span>
        </h1>
      </Hero>
      <section className='py-6 md:py-25'>
        <Container my='my-0'>
          <div className='gap-1 md:gap-15 mx-[30px] md:mx-0 flex flex-col justify-center items-center '>
            <h2 className="text-center title">Nosotros</h2>
            <p className='text-gris-oscuro font-light text-[13px] md:text-[22px] leading-4 md:leading-7 text-center opacity-70'>Somos una notaría comprometida con la excelencia y confianza, brindando asesoramiento notarial con transparencia y profesionalismo. 
              Ofrecemos servicios en <span className='font-bold'>escrituras públicas, como compraventas, donaciones, hipotecas, poderes y constitución de empresas, además de asuntos no 
              contenciosos como matrimonios, divorcios, sucesiones y rectificaciones.</span>  Garantizamos atención personalizada y seguridad jurídica en cada trámite, 
              priorizando su tranquilidad y confianza.</p>
          </div>
        </Container>
      </section>
      <section className='bg-beige py-6 md:py-25'>
        <Container my='my-0'>
          <div className='gap-1 flex flex-col justify-center items-center '>
            <h2 className="text-center title">El notario</h2>
            <h3 className="font-[Choplin] font-semibold text-gris-oscuro text-[19px] md:text-[40px] text-center">Alejandro Ramirez Carranza</h3>
            <p className='text-gris-oscuro font-regular text-[13px] md:text-[22px] leading-4 md:leading-6 text-center m-4'>Abogado por la Universidad Nacional de Trujillo, 
              Magíster en Derecho por la misma casa de estudios y Doctor en Derecho y Ciencias Políticas por la Universidad de San Martín de Porres. <br /><br /> Actualmente, es Notario de Lima 
              desde el año 1999, desarrollando una destacada trayectoria profesional en el ejercicio de la función notarial, con especial énfasis en materias de derecho civil y registral. 
              Ha ejercido funciones en el ámbito registral, habiendo sido miembro del Tribunal Registral de Trujillo, participando en la calificación y resolución de asuntos propios del 
              Derecho Registral.</p>
          </div>
        </Container>
      </section>
      <section className="pt-10 md:pt-24">
        <Container my="my-20px">
          <div className='flex flex-col gap-5 md:gap-10 justify-center items-center'>
            <div className="w-full h-[224px] smd:h-[171px] md:h-[340px] lg:h-[216px] bg-gris-claro flex flex-col smd:flex-row items-center justify-center gap-0 smd:gap-12 rounded-3xl px-6 md:px-12 py-8 md:py-12">
              <div className="flex justify-center items-center">
                <img src={iconoMision} alt="mision"  className="w-[57px] h-[57px] md:w-[95px] md:h-[95px]"/>
              </div>
              <div className="w-full max-w-[300px]  md:max-w-[800px] text-center smd:text-start">
                <h2 className="font-[Choplin] font-semibold text-[28px] md:text-[55px]">Misión</h2>
                <p className="text-[13px] md:text-[22px] font-normal leading-tight text-gris-oscuro">Nuestra razón de ser es garantizar seguridad y confianza en cada acto y contrato, a través de un servicio notarial ágil, eficiente y de alta calidad.</p>  
              </div>
            </div>
            <div className="w-full h-[224px] smd:h-[171px] md:h-[340px] lg:h-[216px] bg-gris-claro flex flex-col smd:flex-row items-center justify-center gap-0 smd:gap-12 rounded-3xl px-6 md:px-12 py-8 md:py-12">
              <div className="flex justify-center items-center">
                <img src={iconoVision} alt="mision"  className="w-[57px] h-[57px] md:w-[95px] md:h-[95px]"/>
              </div>
              <div className="w-full max-w-[300px]  md:max-w-[800px] text-center smd:text-start">
                <h2 className="font-[Choplin] font-semibold text-[28px] md:text-[55px]">Visión</h2>
                <p className="text-[13px] md:text-[22px] font-normal leading-tight text-gris-oscuro">Ser referentes en confianza, seguridad y eficiencia notarial.</p>  
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Cita></Cita>
      <Footer></Footer>
      <BotonWhatsApp />
    </>
  )
}

export default Nosotros