import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import programs from './programs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom } from 'swiper/modules';
import './planes.css';

function Planes() {
    const [currentSlides, setCurrentSlides] = useState(programs.map(() => 0));

    const handleNextSlide = (index, totalSlides) => () => {
        setCurrentSlides((prevSlides) =>
            prevSlides.map((slide, i) => (i === index ? (slide + 1) % totalSlides : slide))
        );
    };

    const handlePrevSlide = (index, totalSlides) => () => {
        setCurrentSlides((prevSlides) =>
            prevSlides.map((slide, i) => (i === index ? (slide - 1 + totalSlides) % totalSlides : slide))
        );
    };

    return (
        <Box
            pt={4}
            sx={{
                background: "url('https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1238.PNG?alt=media&token=b1061879-50cf-4ae3-b8ce-f0153aba3bf6')",
                color: '#19a877',
                textAlign: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                paddingBottom: '4rem',
                minHeight: '100vh',  // Altura mínima de la pantalla
                overflowY: 'auto',  // Permitir scroll vertical si es necesario
            }}
        >
            <Box style={{}}>
                <Typography
                    component="h2"
                    variant="h2"
                    fontFamily="borel, cursive"
                    textAlign="center"
                    gutterBottom
                    marginTop={4}
                    color={'white'}
                >
                    planes
                </Typography>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom]}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ width:'95vw'}}
                    navigation
                    spaceBetween={100}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1170: { slidesPerView: 2 },
                        1250: { slidesPerView: 3 },
                    }}
                >
                    {programs.map((programa, index) => (
                        <SwiperSlide key={programa.id}>
                            <Box
                                sx={{
                                    padding: 5.5,
                                    marginTop: '4rem',
                                    display: 'flex',
                                    height: '48rem',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    gap: '.2rem',
                                    border: '1px solid #ddd',
                                    borderRadius: '2rem',
                                    backgroundColor: 'rgba(255, 255, 255, .9)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    },
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                >
                                    {programa.nombre}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {programa.descripcion}
                                </Typography>

                                {/* Slide Content */}
                                <Box sx={{ position: 'relative' }}>
                                    <Typography
                                        fontFamily="borel, cursive"
                                        textAlign="center"
                                        gutterBottom
                                    >
                                        Incluye
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '14rem',  // Establece una altura fija para el contenedor
                                            overflow: 'hidden',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#333', textAlign: 'center', width: '10rem' }}>
                                            {programa.incluye[currentSlides[index]]}
                                        </Typography>
                                    </Box>

                                    {/* Navigation Buttons */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0,
                                        right: 0,
                                        height: '5rem', // Debe coincidir con la altura del contenedor del texto
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        px: 1,
                                        pointerEvents: 'none',  // Evita la interacción con el contenedor
                                    }}>
                                        <IconButton
                                            onClick={handlePrevSlide(index, programa.incluye.length)}
                                            sx={{
                                                backgroundColor: '#fff',
                                                '&:hover': {
                                                    backgroundColor: '#ddd',
                                                },
                                                pointerEvents: 'auto',  // Permite la interacción con el botón
                                            }}
                                        >
                                            <ArrowBackIosIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={handleNextSlide(index, programa.incluye.length)}
                                            sx={{
                                                backgroundColor: '#fff',
                                                '&:hover': {
                                                    backgroundColor: '#ddd',
                                                },
                                                pointerEvents: 'auto',  // Permite la interacción con el botón
                                            }}
                                        >
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default Planes;
