import React, { useState } from 'react';
import { Box, Button, Grid, Modal, IconButton, Typography } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import '../sections/styles/gallery.css';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
const imageProps = {
  style: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' },
  alt: 'image'
};

const additionalImages = [
  'https://felizvita.com/wp-content/uploads/2020/07/el-dia-de-los-abuelos-cab.jpg',
  'https://image.ondacero.es/clipping/cmsimages01/2014/08/03/59921F08-B26B-4750-901D-838AEFD9344D/58.jpg',
  'https://live.staticflickr.com/5085/5243444196_db3a9b9455_c.jpg',
  'https://felizvita.com/wp-content/uploads/2020/07/el-dia-de-los-abuelos-cab.jpg',
  'https://felizvita.com/wp-content/uploads/2020/07/el-dia-de-los-abuelos-cab.jpg',
  'https://felizvita.com/wp-content/uploads/2020/07/el-dia-de-los-abuelos-cab.jpg',
  // Agrega más URLs de imágenes aquí
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [gridSize, setGridSize] = useState(12);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGridSize(12)
  } 

  const toggleGridSize = () => {
    setGridSize(gridSize === 12 ? 6 : gridSize === 6 ? 4 : 12);
  };

  return (
    <Box className="gallery" sx={{ minHeight: '100vh', color: 'white', p: 5, display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Grid container spacing={6} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <img
            {...imageProps}
            src="https://compartirenfamilia.com/wp-content/uploads/2022/02/abuelos.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <img
            {...imageProps}
            src="https://www.caritas.org.mx/wp-content/uploads/2022/07/la-importancia-de-los-abuelos-en-la-familia-1024x768.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
          <img
            {...imageProps}
            src="https://felizvita.com/wp-content/uploads/2020/07/el-dia-de-los-abuelos-cab.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <img
            {...imageProps}
            src="https://image.ondacero.es/clipping/cmsimages01/2014/08/03/59921F08-B26B-4750-901D-838AEFD9344D/58.jpg"
          />
        </Grid>
      </Grid>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'transparent',
          color: 'white',
          '&:hover': {
            bgcolor: 'transparent',
            color: 'grey',
          }
        }}
      > ver mas fotos
        <AddPhotoAlternateIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="additional-images-modal"
        aria-describedby="additional-images-modal-description"
        sx={{ overflow: 'auto' }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
          p: 4,
          m: 2,
          borderRadius: 1,
          maxWidth: '80vw',
          maxHeight: '95vh',
          overflowY: 'auto'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button
            onClick={toggleGridSize}
            sx={{ mb: 2 }}
          >
         {gridSize === 12 ? <SplitscreenIcon style={{ transform: 'rotate(90deg)', position:'fixed' }} /> : gridSize === 6 ? < ViewColumnIcon  style={{  position:'fixed' }}/> : < ViewAgendaIcon  style={{  position:'fixed' }}/>}

          </Button>
          <Grid style={{height:'100vh'}} container spacing={1}>
            {additionalImages.map((src, index) => (
              <Grid item xs={12} sm={6} md={gridSize}  key={index}>
                <img {...imageProps} src={src} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

export default Gallery;
