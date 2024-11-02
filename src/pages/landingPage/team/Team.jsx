import { useState } from 'react';
import { Container, Typography, Grid, IconButton, Box, useMediaQuery, Card } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './team.css';
import Nav from '../components/Nav';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom } from 'swiper/modules';


const teamArray = [
    { id: 1, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(1).png?alt=media&token=7e92257d-5439-4f43-a4f8-a4751e06a2e3', nombre: 'Gloria Pérez', cargo: 'Cocina' },
    { id: 2, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(2).png?alt=media&token=63e32705-5db6-44f5-b621-7b0a2bd3a974', nombre: 'María C. Barón', cargo: 'Directora' },
    { id: 3, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(3).png?alt=media&token=b089ceb3-8c39-4d98-b188-299ff798cf89', 
nombre: 'Maura Ramírez', cargo: 'Enfermería' },
    { id: 4, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(4).png?alt=media&token=07959c88-6c57-4c9f-a609-3620d0b70550',
nombre: 'Jordan Cartaya', cargo: 'Enfermería' },
];

function Team() {
    const [expandedId, setExpandedId] = useState(null);
    const isMobile = useMediaQuery('(max-width:1131px)')

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (

       



        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh'  }}>
            
            <Nav />
{isMobile &&
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        slidesPerView={1}
        spaceBetween={100}>
           {teamArray.map((el) => {
    return ( <SwiperSlide style={{display:'flex', justifyContent:'center'}}  key={el.id}><Card style={{width:'60%', height:'70%'}} key={el.id}> <Box className='team-bg' style={{ width: '60%', }} position={'absolute'} bottom={0}>
    <Container style={{ height: '7rem', color: "white", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign:'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontFamily: 'borel, cursive', fontWeight: 'bold', textShadow: '4px 4px 2px rgba(0, 0, 0, 0.151)' }}>{el.nombre}</h3>
        <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1em', textShadow: '4px 4px 2px rgba(0, 0, 0, 0.151)' }}>{el.cargo}</p>
    </Container>
</Box> <img loading='lazy' style={{ width: '100%' }} src={el.background} alt={el.nombre} /> 
    


</Card></SwiperSlide>)
})} 
        </Swiper>
  }


{!isMobile &&  <main>
              
                
              <Grid 
                  container 
                  style={{
                      display: 'grid',
                      gridTemplateColumns: expandedId ? '3fr 1fr 1fr' : 'repeat(4, 1fr)', 
                      gridTemplateRows: expandedId ? 'auto' : 'repeat(1, 1fr)',
                      gap: '2.5rem',
                      transition: 'all 0.3s ease',
                      width: expandedId ? '70rem' : "70rem",
                      margin: '0 auto',
                      
                  }}
              >
                  {teamArray.map((el) => {
                      const isExpanded = expandedId === el.id;
                      const isAnyExpanded = expandedId !== null;

                      return (
                          <Grid 
                              item
                              key={el.id} 
                              style={{
                                  height: isExpanded ? '680px' : isAnyExpanded ? 'auto' : '335px',
                                  borderRadius: '15px',
                                  transition: 'all 0.3s ease',
                                  gridColumn: { md: isExpanded ? '1 / span 1' : 'auto' },
                                  gridRow: isExpanded ? '1 / span 2' : 'auto',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  position: 'relative',
                                  cursor: 'pointer',
                                  overflow: 'hidden',
                              }}
                              onClick={() => handleExpandClick(el.id)}
                          >
                              <IconButton 
                                  style={{
                                      position: 'absolute',
                                      top: '8px',
                                      right: '8px',
                                      color: el.background,
                                      backgroundColor: 'white',
                                      width: '2rem',
                                      height: '2rem',
                                      zIndex: 10,
                                  }}
                              >
                                  {isExpanded ? <RemoveIcon style={{ fontSize: '2.5rem', fontWeight: 'bold' }} /> : <AddIcon style={{ fontSize: '2rem' }} />}
                              </IconButton>
                              <img loading='lazy' style={{ width: '100%' }} src={el.background} alt={el.nombre} />

                              {isExpanded && <Box className='team-bg' style={{ width: '100%' }} position={'absolute'} bottom={0}>
                                  <Container style={{ height: '10rem', color: "white", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                      <h3 style={{ fontSize: '4rem', fontFamily: 'borel, cursive', fontWeight: 'bold', textShadow: '4px 4px 2px rgba(0, 0, 0, 0.151)' }}>{el.nombre}</h3>
                                      <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em', textShadow: '4px 4px 2px rgba(0, 0, 0, 0.151)' }}>{el.cargo}</p>
                                  </Container>
                              </Box>} 
                          </Grid>
                      );
                  })}
              </Grid>
          </main>}

            
        </div>
    );
}

export default Team;
