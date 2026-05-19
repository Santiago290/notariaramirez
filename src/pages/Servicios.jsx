import Hero from '../components/blocks/Hero'
import imgServicios from "../assets/images/imgServicios.jpg"
import Services from '../components/blocks/Services'

const Servicios = () => {
  return (
    <>
        <Hero image={imgServicios} imageAlt="Servicios notariales de la Notaría Alejandro Ramírez Carranza">
            <h1 className="font-[Choplin] font-light text-[21px] sm:text-3xl md:text-5xl lg:text-[62px] leading-5 smd:leading-none  mb-3 sm:mb-5 md:mb-8">
                <span className="font-semibold">Encuentra</span> el<br /> servicio notarial que<br /> <span className="font-semibold">necesitas </span>
            </h1>
        </Hero>
        <Services />
    </>
  )
}

export default Servicios
