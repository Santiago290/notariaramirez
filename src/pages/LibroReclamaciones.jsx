import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Boton from "../components/ui/Boton";

export default function LibroReclamaciones() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <>
      <Navbar />

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
                <input type="text" placeholder="Nombres" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

                <input type="text" placeholder="Apellidos" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <select className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition">
                  <option>DNI</option>
                  <option>CE</option>
                  <option>Pasaporte</option>
                </select>

                <input type="text" placeholder="Número de documento" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
              </div>

              <input type="text" placeholder="Dirección" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

              <input type="email" placeholder="Correo electrónico" required className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>

              <input type="text" placeholder="Teléfono" className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition"/>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 border-l-4 border-rojo pl-2 sm:pl-3 mb-3 sm:mb-4">
                2. Detalle del reclamo
              </h2>

              <select className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition">
                <option>Reclamo (producto/servicio)</option>
                <option>Queja (malestar)</option>
              </select>

              <textarea placeholder="Describe el problema (máx. 1000 caracteres)" maxLength="1000" className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg h-28 sm:h-32 mt-3 sm:mt-4 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition resize-none" />
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg text-gray-800 border-l-4 border-rojo pl-2 sm:pl-3 mb-3 sm:mb-4">
                3. Pedido del consumidor
              </h2>

              <textarea placeholder="¿Qué solución esperas?" className="w-full p-2 sm:p-3 border border-gris-claro rounded-lg h-20 sm:h-24 focus:ring-1 focus:ring-red-500/60 focus:border-rojo outline-none transition resize-none"
              />
            </div>

            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
              <input type="checkbox" required className="accent-rojo scale-110 mt-1"/>
              <label>
                Acepto el tratamiento de mis datos personales
              </label>
            </div>

            <Boton type="submit" texto="Enviar Reclamo" bg="bg-rojo" textColor="text-white" border="border border-[rgb(189,23,20)]" fontWeight="font-semibold" rounded="rounded-xl" className="w-full hover:bg-rojo hover:border-rojo transform hover:scale-[1.02] active:scale-95 shadow-md"/>
          </form>

          {enviado && (
            <div className="mt-5 sm:mt-6 text-center">
              <p className="text-green-600 font-semibold text-sm sm:text-lg">
                ✔ Reclamo enviado correctamente
              </p>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}