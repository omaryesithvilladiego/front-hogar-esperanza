import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import { Typography, useMediaQuery } from '@mui/material';
import "./instalaciones.css";

const additionalImages = [
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1749.jpg?alt=media&token=38053fb2-2a8e-45b4-875c-e02c36623c0b',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1745.jpg?alt=media&token=208b584d-7dbc-45ba-abeb-f43509c6c978',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1735.jpg?alt=media&token=c7290f67-0bed-493a-888b-0bc257590579',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1733.jpg?alt=media&token=64d701de-9bbc-4665-90d9-1b1a876867db',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1724.jpg?alt=media&token=929130af-e7c3-4b12-8f1e-de655a4a0848',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1711.jpg?alt=media&token=877b65db-9d3a-40e2-acad-214676cc0aab',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1710.jpg?alt=media&token=5d406a4a-16e7-4d74-92b9-155783f35bc9',
  'https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/gallery%2Finstalacones%2FIMG_1690.jpg?alt=media&token=96b765cd-aea6-4d08-a794-457f93861b01'
];

const Instalaciones = () => {

  const isMobile = useMediaQuery('(min-width:1050px)')

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;

    if (swiper.params.slidesPerView === 3) {
      const centerSlide = swiper.slides[activeIndex + 1];
      const inactiveSlide1 = swiper.slides[activeIndex];
      const inactiveSlide2 = swiper.slides[activeIndex + 2];

      const centerChild = centerSlide.querySelector('.swiper-zoom-container');
      const inactiveChild1 = inactiveSlide1.querySelector('.swiper-zoom-container');
      const inactiveChild2 = inactiveSlide2.querySelector('.swiper-zoom-container');

      inactiveChild1.style.scale = '1';
      inactiveChild2.style.scale = '1';
      inactiveChild2.style.zIndex = '0';

      centerChild.style.transition = 'scale .5s ease';
      centerChild.style.scale = '1.25';
      centerChild.style.zIndex = '1000';
    }
  };

  return (
    <div style={{ height: '100%', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgba(213, 225, 221, 0.85)' }}>
      <Typography marginTop={'10rem'} component="h2" variant="h2" fontFamily="borel, cursive" textAlign="center" gutterBottom color={'#19a877'} fontSize={{xs:'8vw', md:'4vw'}}>
        instalaciones
      </Typography>
      <div style={{ height: '100%', width: !isMobile ? '95%' : '80%', margin: '0 auto', display: 'flex', alignItems: 'center'}}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom]}
          spaceBetween={100}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
          onSwiper={(slide) => slide}
          onSlideChange={handleSlideChange}
          zoom={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {additionalImages.map((item, index) => (
            <SwiperSlide key={index} style={{ height: '35rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
              <div className="swiper-zoom-container" style={{ background: `url(${item})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '40rem', height: '18rem', borderRadius: '2rem' }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Instalaciones;
