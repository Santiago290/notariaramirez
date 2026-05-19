import { useState } from "react";
import Boton from "../components/ui/Boton";

const SEND_EMAIL_ENDPOINT =
  import.meta.env.VITE_SEND_EMAIL_ENDPOINT ?? "/send-email.php";

export default function LibroReclamaciones() {
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setEnviado(false)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch(SEND_EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message || 'Error en el servidor')
      }

      setEnviado(true)
      e.target.reset()

    } catch (error) {
      console.error(error)
      alert(error.message || 'Error al enviar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>

      <div className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 min-h-screen py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-2xl">

          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-[rgb(189,23,20)] mb-2 sm:mb-3 tracking-tight">
              Libro de Reclamaciones
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-rojo mx-auto rounded-full mb-2 sm:mb-3"></div>
            <p className="text-gray-600 text-xs sm:text-sm">
              Conforme al Código de Protección y Defensa del Consumidor
            </p>
          </div>

          <div className="mb-6 sm:mb-8 border border-gray-200 p-4 sm:p-5 rounded-lg sm:rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800">
              Datos del proveedor
            </h2>
            <div className="space-y-1 text-xs sm:text-sm text-gray-700">
              <p><strong>RUC:</strong> 10178949913</p>
              <p><strong>Razón Social:</strong> Rolando Alejandro Ramirez Carranza</p>
              <p><strong>Domicilio:</strong> Av. César Vallejo 290, Lince</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

            <div>
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 border-l-4 border-rojo pl-2 sm:pl-3 mb-3 sm:mb-4">
                1. Datos del consumidor
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input type="text" name="nombres" placeholder="Nombres" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

                <input type="text" name="apellidos" placeholder="Apellidos" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <select name="tipoDocumento" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition">
                  <option value="">Tipo de documento</option>
                  <option>DNI</option>
                  <option>CE</option>
                  <option>Pasaporte</option>
                </select>

                <input type="text" name="numeroDocumento" placeholder="Número de documento" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
              </div>

              <input type="text" name="direccion" placeholder="Dirección" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

              <input type="email" name="email" placeholder="Correo electrónico" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

              <input type="text" name="telefono" placeholder="Teléfono" className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 border-l-4 border-rojo pl-2 sm:pl-3 mb-3 sm:mb-4">
                2. Detalle del reclamo
              </h2>

              <select name="tipoReclamo" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition">
                <option value="">Selecciona tipo de reclamo</option>
                <option>Reclamo (producto/servicio)</option>
                <option>Queja (malestar)</option>
              </select>

              <textarea name="detalleReclamo" placeholder="Describe el problema (máx. 1000 caracteres)" maxLength="1000" className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg h-28 sm:h-32 mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition resize-none" />
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 border-l-4 border-rojo pl-2 sm:pl-3 mb-3 sm:mb-4">
                3. Pedido del consumidor
              </h2>

              <textarea name="pedidoConsumidor" placeholder="¿Qué solución esperas?" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg h-20 sm:h-24 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition resize-none"
              />
            </div>

            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
              <input type="checkbox" name="aceptarTratamiento" required className="accent-rojo scale-110 mt-1"/>
              <label>
                Acepto el tratamiento de mis datos personales
              </label>
            </div>

            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <Boton
              type="submit"
              texto={loading ? "Enviando..." : "Enviar Reclamo"}
              bg="bg-rojo"
              textColor="text-white"
              border="border border-[rgb(189,23,20)]"
              fontWeight="font-semibold"
              rounded="rounded-xl"
              className="w-full hover:bg-rojo hover:border-rojo transform hover:scale-[1.02] active:scale-95 shadow-md"
            />
          </form>

          {enviado && (
            <div className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
              <div className="relative flex w-full max-w-md items-center gap-3 rounded-xl border border-green-200 bg-white px-5 py-4 pr-12 shadow-2xl">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                  ✓
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-gray-900">
                    Correo enviado
                  </p>
                  <p className="text-sm text-gray-500">
                    Tu reclamo fue enviado correctamente.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                  aria-label="Cerrar mensaje"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  x
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
