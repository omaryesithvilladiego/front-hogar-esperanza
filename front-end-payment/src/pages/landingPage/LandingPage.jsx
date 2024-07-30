import Nav from "./components/Nav.jsx";
import Gallery from "./sections/Gallery";
import Inicio from "./sections/Inicio";
import Planes from "./sections/Planes/Planes.jsx";



function LandingPage() {
    return ( 
    
    <div>
        <Nav />
        <Inicio />
        <Gallery />
        <Planes />

    </div> );
}

export default LandingPage;