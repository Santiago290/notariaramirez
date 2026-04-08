import React, {useState} from 'react'
import Container from '../layout/Container'
import Boton from '../ui/Boton'


const Formulario = () => {
    
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        try {
        const res = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await res.json()

        alert(result.message)
        e.target.reset()

        } catch (error) {
        alert('Error al enviar ❌')
        }

        setLoading(false)
    }
  
    return (
    <>
        <div className="bg-crema  py-10 md:py-20">
            <Container>
                <div>
                    <div className="text-center mb-6 md:mb-12">
                        <h1 className="title mb-1 text-[30px] md:text-[40px]">Consúltanos</h1>
                        <p className="text-gris-oscuro text-[13px] md:text-[25px]">Escribenos tu consulta y te responderemos a la brevedad</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <input type="text" name="nombres" placeholder="Nombres" required className="w-full px-6 py-3 bg-white text-gris placeholder:text-center md:placeholder:text-start placeholder-gris-oscuro placeholder:opacity-30  rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                            <input type="text" name="apellidos" placeholder="Apellidos" required className="w-full px-6 py-3 bg-white text-gris placeholder:text-center md:placeholder:text-start placeholder-gris-oscuro placeholder:opacity-30  rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                        </div>

                        <div className="mb-3">
                            <input type="email" name="email" placeholder="Correo electrónico" required className="w-full px-6 py-3 bg-white text-gris placeholder:text-center md:placeholder:text-start placeholder-gris-oscuro placeholder:opacity-30  rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700"/>
                        </div>

                        <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
                            <input type="tel" name="telefono" placeholder="Teléfono" required className="w-full px-6 py-3  bg-white text-gris placeholder:text-center md:placeholder:text-start placeholder-gris-oscuro placeholder:opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700" />
                            <select name="servicio" onMouseDown={() => setOpen((prev) => !prev)} onBlur={() => setOpen(false)} required defaultValue="" className="cursor-pointer appearance-none w-full pl-6 pr-10 py-3 bg-white text-gris-oscuro invalid:text-gris/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700">
                                <option className='text-center md:text-start' value="" disabled >Servicio de interés</option>
                                <option value="anticipo">Anticipo</option>
                                <option value="arrendamiento">Arrendamiento</option>
                                <option value="autorizacion">Autorización</option>
                                <option value="compraventa">Compraventa</option>
                                <option value="constitucion">Constitución</option>
                                <option value="divorcio">Divorcio</option>
                                <option value="donacion">Donación</option>
                                <option value="legalizaciones">Legalizaciones</option>
                                <option value="matrimonio">Matrimonio</option>
                                <option value="otros">Otros</option>
                                <option value="poderes">Poderes</option>
                                <option value="rectificacion">Rectificación</option>
                                <option value="sucesion">Sucesión</option>
                                <option value="testamento">Testamento</option>
                                <option value="vehicular">Vehicular</option>
                            </select>
                            <span className={`pointer-events-none absolute right-4 bottom-4  transition-transform duration-300 text-[10px] text-rojo ${open ? "rotate-180" : ""}`} > ▼ </span>                 
                        </div>

                        <div className="mb-8">
                            <textarea name="consulta" placeholder="Consulta" required rows={8} className="w-full px-6 py-3 bg-white text-gris placeholder:text-center md:placeholder:text-start placeholder-gris-oscuro placeholder:opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"/>
                        </div>

                        <div className="flex justify-center">
                            <Boton type='submit'  texto='Enviar Consulta' textSize="text-[12px] md:text-[18px]" px="px-4 md:px-10" fontWeight='font-light' py='py-2' bg='bg-rojo' textColor='text-white' className="hover:bg-rojo hover:text-white hover:border-rojo ease-in-out">
                                {loading ? 'Enviando...' : 'Enviar Consulta'}
                            </Boton>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Formulario