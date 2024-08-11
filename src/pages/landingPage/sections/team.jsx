import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

function NuestroEquipo() {
  return (
    <Box sx={{ width: '100%',  background:'rgba(10,140,96,0.6)', color:'white' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box  sx={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center',  background:'url("https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2FIMG_2020.jpg?alt=media&token=ac692216-28d4-4d36-aac0-cc7b09512a6b")', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', height:'50vh'}}>
           
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width:'70vw', margin:'0 auto', padding: '1rem', backgroundColor: 'white', textAlign: 'center', height:'50vh', background:'transparent', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
           
            <Typography variant="body1">
            En Hogar Esperanza, nos esforzamos por brindar el mejor cuidado posible a nuestros adultos mayores. Para lograrlo,
contamos con un equipo de profesionales de la salud altamente capacitados y comprometidos con su bienestar. Nuestros
especialistas en geriatría, enfermería, terapia ocupacional y psicología trabajan juntos para atender sus necesidades físicas,
emocionales y sociales.
Te invitamos a conocernos y descubrir cómo nuestro equipo de expertos puede hacer una diferencia en la vida de tus seres
queridos. Visítanos y conoce nuestro centro, nuestros servicios y nuestro enfoque personalizado. Estamos aquí para apoyarte y
brindar esperanza y calidad de vida a los adultos mayores. ¡Te esperamos!            </Typography>

    <Button>Conoce al equipo</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NuestroEquipo;
