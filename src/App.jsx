import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Ubicacion from "./pages/Ubicacion"
import Contacto from "./pages/Contacto"
import Scroll from "./components/ui/Scroll"
import LibroReclamaciones from "./pages/LibroReclamaciones"
import MainLayout from "./components/layout/MainLayout"
import ServicioDetalle from "./components/layout/ServicioDetalle"
import Anticipo from "./pages/servicios/Anticipo"
import Arrendamiento from "./pages/servicios/Arrendamiento"
import Autorizacion from "./pages/servicios/Autorizacion"
import Compraventa from "./pages/servicios/Compraventa"
import Constitucion from "./pages/servicios/Constitucion"
import Divorcio from "./pages/servicios/Divorcio"
import Donacion from "./pages/servicios/Donacion"
import Legalizaciones from "./pages/servicios/Legalizaciones"
import Matrimonio from "./pages/servicios/Matrimonio"
import Otros from "./pages/servicios/Otros"
import Poderes from "./pages/servicios/Poderes"
import Rectificacion from "./pages/servicios/Rectificacion"
import Sucesion from "./pages/servicios/Sucesion"
import Testamento from "./pages/servicios/Testamento"
import Vehicular from "./pages/servicios/Vehicular"
import SeoManager from "./components/seo/SeoManager"

function App() {
  return (
    <>
      <SeoManager />
      <Scroll />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicanos" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
          <Route path="/servicios/compraventa" element={<Compraventa />} />
          <Route path="/servicios/arrendamiento" element={<Arrendamiento />} />
          <Route path="/servicios/legalizaciones" element={<Legalizaciones />} />
          <Route path="/servicios/constitucion" element={<Constitucion />} />
          <Route path="/servicios/poderes" element={<Poderes />} />
          <Route path="/servicios/autorizacion" element={<Autorizacion />} />
          <Route path="/servicios/vehicular" element={<Vehicular />} />
          <Route path="/servicios/anticipo" element={<Anticipo />} />
          <Route path="/servicios/donacion" element={<Donacion />} />
          <Route path="/servicios/divorcio" element={<Divorcio />} />
          <Route path="/servicios/matrimonio" element={<Matrimonio />} />
          <Route path="/servicios/rectificacion" element={<Rectificacion />} />
          <Route path="/servicios/sucesion" element={<Sucesion />} />
          <Route path="/servicios/testamento" element={<Testamento />} />
          <Route path="/servicios/otros" element={<Otros />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
