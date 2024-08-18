import {Container, Stack, Typography} from '@mui/material'
import './styles/inicio.css'
function Inicio() {

    return ( 
    
    <section  className="home" id="home">

       <Container sx={{ height:{xs:'120vh',md:'100vh', lg:'100vh'},  color:'white', paddingTop:'4rem'}} maxWidth='md'>

        <Stack height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} alignContent={'center'} gap={'2rem'} >
            <Typography   textAlign={'center'} sx={{ fontSize:{xs:'10vw', md:'5vw'}, fontFamily:'borel, cursive'}}>hogar <br /> esperanza</Typography>
            <Typography textAlign={'center'}>Somos un hogar de vida dedicada a brindar apoyo, cuidado y amor a los adultos mayores, promoviendo su bienestar físico,
emocional y social. Nuestro objetivo es crear un entorno acogedor y seguro donde nuestros abuelos puedan vivir con dignidad,
recibir atención personalizada y sentirse valorados y queridos. Trabajamos para mejorar su calidad de vida y hacer que cada
día sea una oportunidad para encontrar esperanza, alegría y propósito.</Typography>
            </Stack>
       </Container>


    </section> );
}

export default Inicio;