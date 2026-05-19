import React from 'react'
import Container from '../components/layout/Container'
import iconoLlamada from "../assets/icons/iconoLlamada.svg"
import imgContacto from "../assets/images/imgContacto.jpg"
import iconoMensaje from "../assets/icons/iconoMensaje.svg"
import iconoWhastapp from "../assets/icons/iconoWhastapp.svg"
import Hero from '../components/blocks/Hero'

const whatsappHref = (number) => `https://wa.me/${number.replace(/\D/g, '')}`

const WhatsAppLink = ({ children, number }) => (
  <a
    href={whatsappHref(number)}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    {children}
  </a>
)

const Contacto = () => {
  return (
    <>
      <div className="block md:hidden">
        <Hero image={imgContacto} imageAlt="Contacto de la Notaría Alejandro Ramírez Carranza en Lince">
          <div className="font-[Choplin] font-light text-[21px] sm:text-4xl  leading-5 sm:leading-7 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
            Estamos aqui para <br /> ayudarte a resolver tus <br />
            <span className="font-semibold">consultas y tramites <br /> notariales</span>
          </div>
        </Hero>
      </div>

      <div className='text-center my-15 smd:my-25'>
          <h1 className='title'>Contacta con nosotros</h1>
          <Container>
            <p className='text-[13px] md:text-[30px] font-regular'>Si tienes alguna duda o consulta, contáctanos, te estaremos respondiendo a la brevedad posible</p>
          </Container>
      </div>

     
        <div className='w-full pb-15 md:pb-25'> 
          <Container>
          <div>
            <h2 className='text-[13px] smd:text-[23px] lg:text-[40px] font-semibold text-center md:text-start font-[Choplin]'>Central Telefónica</h2>
            <div className='mt-5 md:mt-8'>
              <div className='text-rojo text-[12px] smd:text-[20px] lg:text-[30px] font-light flex gap-2 lg:gap-7'>
                <img src={iconoLlamada} alt="icono llamada" className="w-3 md:w-[35px]" />
                <p>(01) 222-6281</p>
              </div>
              <div className='text-rojo text-[12px] smd:text-[20px] lg:text-[30px] font-light flex gap-2 lg:gap-7'>
                <img src={iconoLlamada} alt="icono llamada" className="w-3 md:w-[35px]" />
                <p>(01) 256-5990</p>
              </div>
              <ul className='font-light text-[9px] smd:text-[18px] lg:text-[25px]'>
                <li>Lunes a Viernes de 9:00 am a 6:00 pm</li>
                <li>Sábados de 9:00 am a 1:00 pm</li>
              </ul>
            </div>
          </div>

          <div className='w-full max-w-6xl border-t border-rojo my-5 smd:my-8 xl:my-15'></div>

          <div>
            <h2 className='text-[13px] smd:text-[23px] lg:text-[40px] font-semibold text-center md:text-start font-[Choplin]'>Área legal</h2>
            <div className='grid grid-cols-2 gap-5 md:gap-10 justify-center items-center mt-5 smd:mt-8'>
              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>Alejandra Ramírez</h3>
                <p className='text-[12px] smd:text-[18px] lg:text-[35px] font-light text-rojo'>Abogada</p>
                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 980 727 180">+51 980 727 180</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center  gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />Anexo: 112
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center  gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono llamada" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />alejandra@notariaramirez.com.pe
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>Jose Ramírez</h3>
                <p className='text-[12px] smd:text-[18px] lg:text-[35px] font-light text-rojo'>Abogado</p>
                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 986 268 501">+51 986 268 501</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 114
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    joseramirez@notariaramirez.com.pe
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>Julio Sullca</h3>
                <p className='text-[12px] smd:text-[18px] lg:text-[35px] font-light text-rojo'>Abogado</p>
                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 986 268 501">+51 986 268 501</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 115
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    juliosullca@notariaramirez.com.pe
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>Miguel Zevallos</h3>
                <p className='text-[12px] smd:text-[18px] lg:text-[35px] font-light text-rojo'>Analista Legal</p>
                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 986 268 501">+51 986 268 501</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 116
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    miguel@notariaramirez.com.pe
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-6xl border-t border-rojo my-5 smd:my-8 xl:my-15'></div>

          <div>
            <h2 className='text-[13px] smd:text-[23px] lg:text-[40px] font-semibold text-center md:text-start font-[Choplin]'>Legalizaciones / Counter</h2>
             <div className='grid grid-cols-2 gap-5 md:gap-10 justify-center items-start mt-5 smd:mt-8'>
              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo'>Legalizaciones</h3>

                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 989 408 337">+51 989 408 337</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 102
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 103
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    legaliza@notariaramirez.com.pe
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    legaliza1@notariaramirez.com.pe
                  </div>
                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    legaliza2@notariaramirez.com.pe
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo'>Counter</h3>

                <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 989 408 337">+51 989 408 337</WhatsAppLink>
                  </div>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-6xl border-t border-rojo my-5 smd:my-8 xl:my-15'></div>
          
          <div className='mt-2 md:mt-8'>
              <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo'>
                Kardex
              </h3>

              <div className='flex flex-col mt-2 gap-0 smd:gap-1'>
                <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                  <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                  <WhatsAppLink number="+51 989 408 293">+51 989 408 293</WhatsAppLink>
                </div>

                <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                  <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                  Anexo: 105
                </div>

                <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                  <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                  kardex@notariaramirez.com.pe
                </div>
              </div>
          </div>

          <div className='w-full max-w-6xl border-t border-rojo my-5 smd:my-8 xl:my-15'></div>

          <div>
            <h2 className='text-[13px] smd:text-[23px] lg:text-[40px] font-semibold text-center md:text-start font-[Choplin] mx-10 md:mx-0 leading-4 smd:leading-tight'>Transferencia Vehiculares / Autorizaciones de viajes / Poderes fuera de Registro</h2>
            <div className='grid grid-cols-2 gap-5 md:gap-10 justify-center items-center mt-5 smd:mt-8'>
              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>
                  Transferencias y Autorizaciones
                </h3>

                <div className='flex flex-col mt-2 md:mt-5 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 986 007 121">+51 986 007 121</WhatsAppLink>
                  </div>

                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 107
                  </div>

                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    estebant@notariaramirez.com.pe
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-[12px] smd:text-[25px] lg:text-[35px] font-bold text-rojo leading-3 smd:leading-7'>
                  Constitución de Empresas
                </h3>

                <div className='flex flex-col mt-2 md:mt-5 gap-0 smd:gap-1'>
                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoWhastapp} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    <WhatsAppLink number="+51 982 528 958">+51 982 528 958</WhatsAppLink>
                  </div>

                  <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoLlamada} alt="icono llamada" className="w-[14px] smd:w-[20px] lg:w-[29px]" />
                    Anexo: 106
                  </div>

                  <div className='text-[7px] smd:text-[11px] lg:text-[22px] font-light flex items-center gap-1 smd:gap-3'>
                    <img src={iconoMensaje} alt="icono mensaje" className="py-[1.2px] w-[14px] smd:w-[20px] lg:w-[29px]" />
                    tuempresa@notariaramirez.com.pe
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-6xl border-t border-rojo my-5 smd:my-8 xl:my-15'></div>

          <div>
            <h2 className='text-[13px] smd:text-[23px] lg:text-[40px] font-semibold text-center md:text-start font-[Choplin]'>Administración</h2>
            <div className='mt-2 md:mt-8'>
              <div className='text-[11px] smd:text-[13px] lg:text-[25px] font-light flex gap-1 smd:gap-3 mt-2'>
                <img src={iconoLlamada} alt="icono llamada" className="w-[14px] md:w-[20px] lg:w-[29px]" />Anexo: 105
              </div>
            </div>
          </div>
          </Container>
        </div>
      
      <div className="flex justify-center">
          <iframe
            title="Mapa de ubicación de la Notaría Alejandro Ramírez Carranza"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3445232410954!2d-77.04053631549353!3d-12.088550312112655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e52b5fd5d%3A0x785d4b2405f696d8!2sAv.%20C%C3%A9sar%20Vallejo%20290%2C%20Lima%2015073!5e0!3m2!1ses-419!2spe!4v1764196264547!5m2!1ses-419!2spe"
            className=" w-full h-[435px] md:h-[691px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
      </div>
    </>
  )
}

export default Contacto
