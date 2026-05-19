import Logo from "../../assets/icons/Logo"
import { Link } from 'react-router-dom'
import Container from './Container'

const Footer = () => {
  return (
    <>
      <footer className="bg-gris-claro text-white">
        <Container>
          <div className="flex flex-col items-center justify-center py-10">

          <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center xl:justify-between items-center lg:items-start gap-5 lg:gap-12 xl:gap-8">
            
            <div className="flex items-center justify-center my-auto">
              <Link to="/" className="flex items-center mx-auto w-50 xl:w-73.75">
                <Logo className="w-50 xl:w-73.75" color1="black" color2="black" />
              </Link>
            </div>

            <div className="flex flex-col items-center text-center lg:text-start w-56.25 divide-y divide-gris">
              <Link to="/" className="font-bold text-gris-oscuro text-[14px] py-2 border-b border-gris w-full">
                Inicio
              </Link>
              <Link to="/contacto" className="font-bold text-gris-oscuro text-[14px] py-2 w-full">
                Contáctanos
              </Link>
            </div>

            <div className="flex flex-col items-center text-center lg:text-start w-56.25 divide-y divide-gris">
              <h2 className="font-bold text-gris-oscuro text-[14px] py-2 w-full">Servicios</h2>

              <Link to="/servicios/compraventa" className="text-gris hover:text-gris-oscuro text-[14px] font-light py-2 w-full">
                Compraventa
              </Link>
              <Link to="/servicios/arrendamiento" className="text-gris hover:text-gris-oscuro text-[14px] font-light py-2 w-full">
                Arrendamiento
              </Link>
              <Link to="/servicios/legalizaciones" className="text-gris hover:text-gris-oscuro text-[14px] font-light py-2 w-full">
                Legalizaciones, Certificaciones
              </Link>
              <Link to="/servicios/constitucion" className="text-gris hover:text-gris-oscuro text-[14px] font-light py-2 w-full">
                Constitución de empresa
              </Link>
              <Link to="/servicios/otros" className="text-gris hover:text-gris-oscuro text-[14px] font-light py-2 w-full">
                Otros servicios notariales
              </Link>
            </div>

            <div className="flex flex-col items-center text-center lg:text-start w-56.25 divide-y divide-gris">
              <h2 className="font-bold text-gris-oscuro text-[14px] py-2 w-full">Legal</h2>
              <Link to="/libro-reclamaciones" className="text-gris text-[14px] font-light py-2 w-full">
                Libro de reclamaciones
              </Link>
            </div>

          </div>

          <div className=" hidden lg:block w-full max-w-6xl border-t border-gray-700 my-10"></div>

          <div className="mt-5 lg:mt-0 w-full max-w-275 flex flex-col lg:flex-row justify-start lg:justify-start gap-5 lg:gap-8.75 xl:gap-10 items-center ">   

              <div className="flex flex-col text-center lg:text-start">
                  <span className="font-bold text-[14px] lg:text-[15px] text-gris-oscuro">Ubicación:</span>
                  <span className="text-[14px] lg:text-[15px] font-light text-gris">Av. César Vallejo 290 - Lince</span>
              </div>

              <div className="flex flex-col text-center lg:text-start">
                  <span className="font-bold text-[14px] lg:text-[15px] text-gris-oscuro">Horario de atención:</span>
                  <span className="text-[14px] lg:text-[15px] font-light text-gris">Lunes a viernes de 9:00 a.m. a 6:00 p.m. <br className="lg:hidden" />Sábados de 9:00 a.m. a 1:00 p.m.</span>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full h-12.5 bg-[#1c1c1c] flex justify-center items-center">
            <span className=" font-light text-[10px]  lg:text-[14px]">Copyright © 2025 - Notaría Alejandro Ramírez Carranza</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
