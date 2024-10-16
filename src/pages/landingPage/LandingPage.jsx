import Nav from "./components/Nav.jsx";
import Gallery from "./sections/Gallery";
import Inicio from "./sections/Inicio";
import Instalaciones from "./sections/instalaciones/SliderInstalaciones.jsx";
import MisionVision from "./sections/MisionVision.jsx";
import Planes from "./sections/Planes/Planes.jsx";
import ContactSection from "./sections/contacto/contacto.jsx";
import NuestroEquipo from "./sections/team.jsx";
import SocialMedia from "./components/social-media/SocialMedia.jsx";



function LandingPage() {
    return ( 

        
    
    <div>
  <SocialMedia />
        <Nav />
        <Inicio />
        <Gallery />
        <Planes />
        <Instalaciones />
        <MisionVision />
        <NuestroEquipo />
        <ContactSection />
      

    </div> );
}

export default LandingPage;