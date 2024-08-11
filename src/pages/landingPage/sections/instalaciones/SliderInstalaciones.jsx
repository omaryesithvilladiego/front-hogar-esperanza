// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Importa los estilos necesarios para Navigation
import 'swiper/css/zoom'; // Importa los estilos necesarios para Zoom
import { Typography } from '@mui/material';

const additionalImages = [
  // Agrega más URLs de imágenes aquí
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

  const handleSlideChange = (swiper) => {
    // Obtén el índice del slide activo
    const activeIndex = swiper.activeIndex;


    if (swiper.params.slidesPerView === 3) {
      // Obtén el slide activo usando el índice
      const centerSlide = swiper.slides[activeIndex + 1];
      const inactiveSlide = swiper.slides[activeIndex]
      const inactiveSlide2 = swiper.slides[activeIndex + 2]

      // Obtén el primer elemento hijo dentro del slide activo
      const childElement = centerSlide.querySelector('.swiper-zoom-container');
      const childElement2 = inactiveSlide.querySelector('.swiper-zoom-container');
      const childElement3 = inactiveSlide2.querySelector('.swiper-zoom-container');


      childElement2.style.scale = '1'
      childElement3.style.scale = '1'
      childElement3.style.zIndex = '0'



      // Haz algo con el elemento hijo, por ejemplo, imprimirlo en la consola
      childElement.style.transition = 'scale .5s ease'
      childElement.style.scale = '1.25'
      childElement.style.zIndex = '1000'
    }


  };


  return (
    <div style={{ height: '100vh', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgba(213, 225, 221, 0.85)' }}>

      <Typography marginTop={'10rem'}
        component="h2"
        variant="h2"
        fontFamily="borel, cursive"
        textAlign="center"
        gutterBottom
        color={'#19a877'}
        fontSize={{xs:'8vw', md:'4vw'}}
      >
        Instalaciones
      </Typography>
      <div style={{ height: '100vh', width: '95%', margin: '0 auto', display: 'flex', alignItems: 'center', position: 'absolute', }}>


        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Manipulation, Zoom]}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation // Habilita las flechas de navegación
          onSwiper={(slide) => console.log(slide)
          }

          onSlideChange={handleSlideChange}
          zoom={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {additionalImages.map((item, index) => (
            <SwiperSlide style={{ height: '35rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }} key={index}>
              <div className="swiper-zoom-container" style={{ background: `url(${item})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '40rem', height: '18rem', borderRadius: '2rem' }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Instalaciones;
