import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Drawer, List, ListItem, ListItemText, Container, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../../landingPage/components/styles/nav.css';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    console.log(location);
  },[])

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(1, 1, 1, 0.2)', boxShadow: 'none', padding: '1rem' }}>
        <Toolbar>
          <Stack alignItems={'center'} justifyContent={'space-between'} width={'100%'} flexDirection={'row'}>
           
           {location.pathname === '/' && <IconButton sx={{ display: { lg: 'none', md: 'none' } }} edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton> } 

            <a href={location.pathname === '/' && '#home'} onClick={() => { !(location.pathname === '/') &&  history.goBack()}}>
              <Box
                className='contanier-palomita'
                sx={{ margin: 0, width:{xs:'2rem', lg:'5rem'}, cursor: 'pointer' }}
                component={'img'}
                src='https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1190.PNG?alt=media&token=c313bd2e-b00c-413d-ac31-50201b059e73'
              />
            </a>

          {location.pathname === '/' &&  <Box width={'100%'} display={{ xs: 'none', md: 'flex', color:'white' }} sx={{ justifyContent: 'flex-end' }}>
              <Button component="a" style={{color:'white'}} href="#mision">SOBRE NOSOTROS</Button>
              <Button component="a" style={{color:'white'}} href="#contacto">CONTÁCTANOS</Button>
              <Button component="a" style={{color:'white'}} href="#gallery">GALERÍA</Button>
            </Box>}
           
            
          </Stack>
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ color: 'white', width: 250, backgroundColor: 'rgba(3,162,108,255)', height: '100vh' }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <ListItem button component="a" href="#gallery">
              <ListItemText primary="Galería" />
            </ListItem>
            <ListItem button component="a" href="#mision">
              <ListItemText primary="Sobre Nosotros" />
            </ListItem>
            <ListItem button component="a" href="#contacto">
              <ListItemText primary="Contáctanos" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Nav;
