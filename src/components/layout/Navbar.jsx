import React, {useState} from 'react'
import Boton from "../ui/Boton"
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav className='w-full fixed z-100 h-[110px] smd:h-[150px] 2xl:h-[190px] bg-gradient-to-r from-[#7C0600] to-[#1a0100]'>
            <div className="screen m-auto flex items-center justify-evenly h-full">
                <Link to="/" className="flex items-center mx-auto lg:mx-0">
                    <div className="w-[130px] smd:w-[200px] 2xl:w-[260px]">
                        <Logo className="w-full h-auto" />
                    </div>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden absolute z-50 right-6 w-4 h-8 flex flex-col justify-center items-center gap-[4px]" >
                    <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${ isOpen ? "rotate-45 translate-y-[6px]" : "" }`}></span>
                    <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100" }`}></span>
                    <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
                </button>

                <div className="hidden lg:flex items-center gap-10">
                     <Link  to="/nosotros"  className="relative block h-[20px] overflow-hidden text-white text-[14px] 2xl:text-[17px] font-light group hover:text-amarillo">
                        <div className="transition-transform duration-300 group-hover:-translate-y-full"> La Notaría</div>
                        <div className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full"> La Notaría </div>
                    </Link>
                    <Link to="/servicios" className="relative block h-[20px] overflow-hidden text-white text-[14px] 2xl:text-[17px] font-light group hover:text-amarillo">
                        <div className="transition-transform duration-300 group-hover:-translate-y-full">Servicios</div>
                        <div className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">Servicios</div>
                    </Link>
                    <Link to="/ubicanos" className="relative block h-[20px] overflow-hidden text-white text-[14px] 2xl:text-[17px]  font-light group hover:text-amarillo">
                        <div className="transition-transform duration-300 group-hover:-translate-y-full">Ubícanos</div>
                        <div className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">Ubícanos</div>
                    </Link>
                    <Link to="/contacto">
                        <Boton width='w-[115px] 2xl:w-[140px]' height='h-[30px] 2xl:h-[35px]' textSize='text-[14px] 2xl:text-[17px]' className='hover:bg-rojo hover:text-white hover:border-rojo ease-in-out'></Boton>
                    </Link>
                </div>

                <div className={`lg:hidden fixed top-0 right-0 w-[80%] max-w-[300px] h-screen bg-gradient-to-r from-[#7C0600] to-[#1a0100] flex flex-col items-center justify-center gap-8 z-40 shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`} >
                    <Link to="/nosotros" className="text-white font-choplin text-[18px] 2xl:text-[20px] hover:text-amarillo transition-transform duration-300">
                        La Notaría
                    </Link>
                    <Link to="/servicios" className="text-white font-choplin text-[18px] 2xl:text-[20px] hover:text-amarillo transition-transform duration-300" >
                        Servicios
                    </Link>
                    <Link to="/ubicanos" className="text-white font-choplin text-[18px] 2xl:text-[20px] hover:text-amarillo transition-transform duration-300">
                        Ubícanos
                    </Link>
                    <Link to="/contacto">
                        <Boton width="w-[125px] 2xl:w-[150px]" height="h-[35px] 2xl:h-[40px]" textSize="text-[15px] 2xl:text-[18px]" className="hover:bg-rojo hover:text-white hover:border-rojo ease-in-out" />
                    </Link>
                </div>
            </div>
        </nav>

        <div className="h-[110px] smd:h-[150px] 2xl:h-[190px]"></div> 
    </>
  )
}

export default Navbar