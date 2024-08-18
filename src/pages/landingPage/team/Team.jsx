import { useState } from 'react';
import { Container, Typography, Grid, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const teamArray = [
    { id: 1, background: 'red' },
    { id: 2, background: 'blue' },
    { id: 3, background: 'yellow' },
    { id: 4, background: 'green' }
];

function Team() {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div>
            <header style={{ height: '4rem', width: '100%', backgroundColor:'red' }}>
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
                        gridTemplateColumns: expandedId ? '3fr 1fr 1fr' : 'repeat(4, 1fr)', 
                        gridTemplateRows: expandedId ? 'auto' : 'repeat(1, 1fr)',
                        gap: '1.5rem',
                        transition: 'all 0.3s ease',
                        width: expandedId ? '80vw': "70vw",
                        margin: '0 auto',
                    }}
                >
                    {teamArray.map((el) => {
                        const isExpanded = expandedId === el.id;
                        const isAnyExpanded = expandedId !== null; // Check if any item is expanded

                        return (
                            <Grid 
                                item
                                key={el.id} 
                                style={{
                                    backgroundColor: el.background,
                                    height: isExpanded ? '600px' : isAnyExpanded ? 'auto' : '335px', // Altura expandida y altura base
                                    borderRadius: '15px',
                                    transition: 'all 0.3s ease',
                                    gridColumn:  {xs:!isExpanded ? '1':'1' ,md: isExpanded ? '1 / span 1' : 'auto'}, // Ocupa tres columnas al expandirse
                                    gridRow: isExpanded ? '1 / span 2' : 'auto', // Ocupa una fila al expandirse
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    overflow: 'hidden' // Para evitar desbordamiento del contenido
                                }}
                                onClick={() => handleExpandClick(el.id)}
                            >
                                <IconButton>
                                    <AddIcon style={{ fontSize: '2rem', color: 'white' }} />
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
