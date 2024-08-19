import { useState } from 'react';
import { Container, Typography, Grid, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const teamArray = [
    { id: 1, background: 'red' },
    { id: 2, background: 'blue' },
    { id: 3, background: 'yellow' },
    { id: 4, background: 'green' },
    { id: 5, background: 'pink' },
];

function Team() {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
            <header style={{ height: '6rem', width: '100%', backgroundColor: 'red' }}>
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </header>
            <main>
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
                                    backgroundColor: el.background,
                                    height: isExpanded ? '600px' : isAnyExpanded ? 'auto' : '335px',
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
                            </Grid>
                        );
                    })}
                </Grid>
            </main>
        </div>
    );
}

export default Team;
