import Container from '../layout/Container'
import Boton from '../ui/Boton'
import { service } from "../../data/Servicios.js"
import { Link } from 'react-router-dom'

const getTituloSize = (titulo) => {
  if (titulo.length > 55) return "text-[9.5px] md:text-[16px]";
  if (titulo.length > 28) return "text-[11px] md:text-[18px]";
  return "text-[13px] md:text-[22px]";
};

const Services = () => {
  return (
    <Container my='my-[50px]' w='w-[320px] smd:w-[500px] lg:w-[900px] xl:w-[1150px] mx-auto'>
        <div className="mb-9 md:mb-18 text-center">
          <h2 className="title text-[23px] md:text-4xl leading-none">
            ¿Qué trámites deseas realizar hoy?
           </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-2 smd:gap-4">
            {service.map((item) => (
              <div key={item.slug} className="w-[135px] smd:w-[156px] md:w-[240px] lg:w-[265.99px] h-[220px] md:h-[374px] rounded-2xl overflow-hidden flex flex-col items-center justify-between">
                <div className="w-full h-[55%] bg-gradient-to-r from-[#010000] to-[#7C0600] flex items-center justify-center">
                  <img src={item.icono} alt={item.titulo} className="w-[72px] h-[56px] md:w-[123px] md:h-[96px] object-contain"/>
                </div>

                <div className="w-full h-[45%] bg-crema flex flex-col justify-center items-center py-2 px-3 md:px-6 text-center gap-2 md:gap-4">
    
                  <div className="h-[40px] md:h-[70px] flex items-center justify-center">
                    <h3 className={`leading-tight text-center font-semibold text-balance ${getTituloSize(item.titulo)}`}>
                      {item.titulo}
                    </h3>
                  </div>
                  <Link to={`/servicios/${item.slug}`}>
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
