import Whatsapp from '../../assets/icons/Whastapp';

const BotonWhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[50] group flex items-center">
      <div className="absolute top-3 md:top-5 right-10 md:right-15 overflow-hidden w-[240px] h-[30px] flex items-center justify-end">
        <div className=" bg-crema text-rojo text-[12px] md:text-[14px] font-bold rounded-full h-[30px] flex items-center pl-5 pr-10 transform translate-x-full group-hover:translate-x-5 transition-transform duration-500 ease-in-out">
          Contacta con un asesor
        </div>
      </div>

      <div className='w-13 md:w-17 h-13 md:h-17 bg-green-500 relative z-50 flex justify-center items-center rounded-full border-4 md:border-8 border-white'>
        <a href="https://wa.me/51999999999" target="_blank"  rel="noopener noreferrer" className="w-6 md:w-8 flex items-center justify-center relative rounded-full">
          <Whatsapp className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
};

export default BotonWhatsApp;