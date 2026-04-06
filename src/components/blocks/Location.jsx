import React from 'react'
import Container from '../layout/Container'
import Boton from '../ui/Boton'

const Location = () => {
  return (
    <div className='bg-beige py-7 sm:py-10 md:py-20'>
      <Container>
        <div className='w-full bg-white rounded-[20px] md:rounded-4xl '>
          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 p-[15px] smd:p-[20px] lg:p-[10px]">
            <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3445232410954!2d-77.04053631549353!3d-12.088550312112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e52b5fd5d%3A0x785d4b2405f696d8!2sAv.%20C%C3%A9sar%20Vallejo%20290%2C%20Lima%2015073!5e0!3m2!1ses-419!2spe!4v1764196264547!5m2!1ses-419!2spe"
                  className=" w-full smd:w-[450px] smd:h-[415px] rounded-md smd:rounded-4xl"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
            </div>

            <div className="w-auto px-5 lg:p-5 xl:p-12 space-y-0 flex flex-col items-center lg:items-start text-center lg:text-start gap-4 xl:gap-8">

              <h2 className="text-rojo font-[Choplin] font-medium leading-none md:leading-tight text-[23px] xl:text-[30px]">
                <span className="font-[Choplin] font-light">Notaría Alejandro </span><br />
                Ramírez Carranza
              </h2>

              <p className="font-light text-[13px] xl:text-[14px] leading-4 md:leading-4">
                Somos una notaría comprometida con la excelencia y confianza, brindando 
                asesoramiento notarial con transparencia y profesionalismo. <br /><br />

                Ofrecemos servicios en escrituras públicas, como compraventas, donaciones, 
                hipotecas, poderes y constitución de empresas, además de asuntos no 
                contenciosos como matrimonios, divorcios, sucesiones y rectificaciones. <br /><br />

                Garantizamos atención personalizada y seguridad jurídica en cada trámite, 
                priorizando su tranquilidad y confianza.
              </p>
            <Boton texto="Ver más" textSize="text-[11px] md:text-[18px]" textColor="text-rojo" fontWeight="font-normal" bg="bg-beige" px="px-2 md:px-4" py="py-1" className='hover:bg-rojo hover:text-white hover:border-rojo ease-in-out'/>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Location