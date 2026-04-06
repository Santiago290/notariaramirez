import React, {useState} from 'react'
import Boton from "../ui/Boton"
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav className='w-full fixed z-100 h-[81px] smd:h-[150px] 2xl:h-[190px] bg-gradient-to-r from-[#7C0600] to-[#1a0100]'>
            <div className="screen m-auto flex items-center justify-evenly h-full">
                <Link to="/" className="flex items-center mx-auto lg:mx-0">
                    <div className="w-[110px] smd:w-[200px] 2xl:w-[260px]">
                        <Logo className="w-full h-auto" />
                    </div>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden absolute z-50 right-6 p-2 text-white text-xl">☰</button>
                <div className={`lg:flex items-center gap-10 ${isOpen ? 'fixed top-0 left-0 w-full h-screen from-[#7C0600] to-[#000000] flex flex-col items-center justify-center gap-10 z-40' : 'hidden'}`}>
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
            </div>
        </nav>

        <div className="h-[81px] smd:h-[150px] 2xl:h-[190px]"></div> 
    </>
  )
}

export default Navbar