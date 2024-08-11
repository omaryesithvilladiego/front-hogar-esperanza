import Nav from "./components/Nav.jsx";
import Gallery from "./sections/Gallery";
import Inicio from "./sections/Inicio";
import Instalaciones from "./sections/instalaciones/SliderInstalaciones.jsx";
import Planes from "./sections/Planes/Planes.jsx";



function LandingPage() {
    return ( 
    
    <div>
        <Nav />
        <Inicio />
        <Gallery />
        <Planes />
        <Instalaciones />

    </div> );
}

export default LandingPage;