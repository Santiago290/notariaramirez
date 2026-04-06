import { Route, Routes, useParams } from "react-router-dom"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Ubicacion from "./pages/Ubicacion"
import Contacto from "./pages/Contacto"
import Anticipo from "./pages/servicios/Anticipo"
import Arrendamiento from "./pages/servicios/Arrendamiento"
import Compraventa from "./pages/servicios/Compraventa"
import Legalizaciones from "./pages/servicios/Legalizaciones"
import Constitucion from "./pages/servicios/Constitucion"
import Poderes from "./pages/servicios/Poderes"
import Autorizacion from "./pages/servicios/Autorizacion"
import Vehicular from "./pages/servicios/Vehicular"
import Divorcio from "./pages/servicios/Divorcio"
import Matrimonio from "./pages/servicios/Matrimonio"
import Rectificacion from "./pages/servicios/Rectificacion"
import Testamento from "./pages/servicios/Testamento"
import Donacion from "./pages/servicios/Donacion"
import Sucesion from "./pages/servicios/Sucesion"
import Otros from "./pages/servicios/Otros"
import Scroll from "./components/ui/Scroll"

function App() {
  return (
    <>
      <Scroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ubicanos" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/servicios/:slug" element={<ServicioDynamic />} />
      </Routes>
    </>
  );
}

const ServicioDynamic = () => {
  const { slug } = useParams();

  const componentes = {
    anticipo: <Anticipo />,
    arrendamiento: <Arrendamiento />,
    compraventa: <Compraventa />,
    legalizaciones: <Legalizaciones />,
    poderes: <Poderes />,
    constitucion: <Constitucion />,
    autorizacion: <Autorizacion />,
    vehicular: <Vehicular />,
    divorcio: <Divorcio />,
    matrimonio: <Matrimonio />,
    rectificacion: <Rectificacion />,
    testamento: <Testamento />,
    otros: <Otros />,
    donacion: <Donacion />,
    sucesion: <Sucesion />
  };

  return componentes[slug] || <h1>Servicio no encontrado</h1>;
};

export default App;
