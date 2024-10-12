import { useState } from 'react';
import { Container, Typography, Grid, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const teamArray = [
    { id: 1, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(1).png?alt=media&token=7e92257d-5439-4f43-a4f8-a4751e06a2e3' },
    { id: 2, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(2).png?alt=media&token=63e32705-5db6-44f5-b621-7b0a2bd3a974' },
    { id: 3, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(3).png?alt=media&token=b089ceb3-8c39-4d98-b188-299ff798cf89' },
    { id: 4, background: 'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/equipo%2FCARNETS%20HOGAR%20ESPERANZA%20(4).png?alt=media&token=07959c88-6c57-4c9f-a609-3620d0b70550' },
];

function Team() {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}} >
            <main >
            <a style={{display:'flex', alignItems:'center'}} href="/">
              <Container
                className='contanier-palomita'
                sx={{ margin: 0, width: '7rem', cursor: 'pointer' }}
                maxWidth='md'
                component={'img'}
                src='https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1190.PNG?alt=media&token=c313bd2e-b00c-413d-ac31-50201b059e73'
              />
              <ArrowBackIosNewIcon />
            </a>
                <Container style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} maxWidth='md'>
                    <Typography fontSize={'4vw'} fontFamily={'borel, cursive'} color={'white'} variant="h1">Conoce al equipo</Typography>
                </Container>
                
                <Grid 
                    container 
                    style={{
                        display: 'grid',
                        gridTemplateColumns:  expandedId ? '3fr 1fr 1fr' : 'repeat(4, 1fr)', 
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
                                    background: el.background,
                                    height: isExpanded ? '680px' : isAnyExpanded ? 'auto' : '335px',
                                    borderRadius: '15px',
                                    transition: 'all 0.3s ease',
                                    gridColumn: {  md: isExpanded ? '1 / span 1' : 'auto' },
                                    gridRow: isExpanded ? '1 / span 2' : 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative', // Para posicionar el ícono en la esquina
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onClick={() => handleExpandClick(el.id)}
                            >
                                <IconButton 
                                    style={{
                                        position: 'absolute',
                                        top: '8px',  // Separación del borde superior
                                        right: '8px',  // Separación del borde derecho
                                        color: el.background,
                                        backgroundColor:'white',
                                        width:'2rem',
                                        height:'2rem',
                                        zIndex: 10, // Asegurar que el icono esté por encima del contenido
                                    }}
                                >
                                    {isExpanded ? <RemoveIcon style={{ fontSize: '2.5rem', fontWeight:'bold', }} /> : <AddIcon style={{ fontSize: '2rem'}} />}
                                </IconButton>
                                <img style={{width:'100%'}} src={el.background}></img>
                            </Grid>
                        );
                    })}
                </Grid>
            </main>
        </div>
    );
}

export default Team;
