import Whatsapp from "../../assets/icons/Whastapp"
import whatsappIcon from "../../assets/icons/WhatsappContacto.svg"
import imgPlanear from "../../assets/images/imgPlanear.jpg"
import Container from "../layout/Container"
import Boton from "../ui/Boton"

const Cita = () => {
  return (
    <section className=" space-y-4 py-[30px] md:py-[50px] lg:py-[80px] px-3">
      <Container>
        <div className="text-center mb-5 sm:mb-10 sm:mb-12 md:mb-16 w-full">
          <h2 className="title">
            Contáctanos
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-auto h-[218px] smd:w-[500px] smd:h-[240px] lg:w-[800px] lg:h-[380px] rounded-2xl lg:rounded-4xl overflow-hidden">
            <div className="h-[114px] smd:h-[120px] lg:h-[190px] w-full overflow-hidden">
              <img src={imgPlanear} alt="Persona Natural" className="h-full w-full object-cover object-top"/>
            </div>
            <div className="h-[114px] smd:h-[120px] lg:h-[190px] w-full bg-gradient-to-r from-[#7C0600] to-[#000000]">
              <div className="w-full h-full gap-2 lg:gap-6 flex flex-col text-center justify-center items-center relative">
                <div className="absolute flex justify-center items-center -top-7 lg:-top-12 left-1/2 -translate-x-1/2  w-[50px] h-[50px] lg:w-24 lg:h-24 rounded-full bg-rojo">
                  <img
                      className="w-11 h-11 sm:w-20 sm:h-20 animate-pulseScale"
                      src={whatsappIcon}
                      alt="WhatsApp"
                    />
                </div>
                  <h3 className="mt-0 lg:mt-5 text-[17px] xl:text-[40px] lg:text-3xl text-white font-light">
                    Escríbenos por <span className="font-bold">Whastapp</span>
                  </h3>
                  <Boton border="none" textSize="text-[11px] lg:text-[18px]" textColor="text-rojo" fontWeight="font-normal" bg="bg-beige" px="px-4 lg:px-4" py="py-1" className=" relative overflow-hidden hover:bg-rojo hover:text-white hover:border-rojo ease-in-out m-0">
                    <span className=" z-10 transition-colors duration-200">Contactar</span>
                  </Boton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cita

