import Navbar from "./Navbar"
import Footer from "./Footer"
import Ventana from "./Ventana"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Ventana />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout