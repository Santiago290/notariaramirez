import React from 'react'
import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Cita from '../components/blocks/Cita'
import Hero from '../components/blocks/Hero'
import imgUbicacion from "../assets/images/imgUbicacion.jpg"
import BotonWhatsApp from '../components/ui/BotonWhatsApp'

const Ubicacion = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="block md:hidden">
        <Hero image={imgUbicacion}>
          <h2 className="font-[Choplin] font-light text-[21px] sm:text-3xl md:text-5xl lg:text-[62px] leading-5 smd:leading-6 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
            <span className="font-semibold">Visítanos</span> en nuestras<br />
            oficinas para brindarte <br />
            una <span className="font-semibold">atencion directa</span> y <br />
            <span className="font-semibold">confiable</span>
          </h2>
        </Hero>
      </div>

      <Container my='my-[50px]'>
        <div className='text-center'>
          <h1 className='title'>Encuéntranos en</h1>
          <h2 className='text-[19px] md:text-[30px] lg:text-[50px] font-light'>Av. César Vallejo 290, Lince.</h2>
        </div>
      </Container>

      <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3445232410954!2d-77.04053631549353!3d-12.088550312112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e52b5fd5d%3A0x785d4b2405f696d8!2sAv.%20C%C3%A9sar%20Vallejo%20290%2C%20Lima%2015073!5e0!3m2!1ses-419!2spe!4v1764196264547!5m2!1ses-419!2spe"
            className=" w-full h-[435px] md:h-[1339px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
      </div>
      
      <Cita></Cita>
      <Footer></Footer>
      <BotonWhatsApp />
    </>
  )
}

export default Ubicacion