import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, Container, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import '../../landingPage/components/styles/nav.css'


function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(1,1,1,0.5)', boxShadow: 'none', padding:'1rem'}}>
        <Toolbar >

        <Stack justifyContent={'space-between'} width={'100%'} flexDirection={'row'}>
          <IconButton sx={{display:{lg:'none', md:'none', }}} edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          <Container className='contanier-palomita' sx={{ margin:0,width:'7rem'}} maxWidth='md' component={'img'} src='https://firebasestorage.googleapis.com/v0/b/hogaresperanza-8f8ea.appspot.com/o/IMG_1190.PNG?alt=media&token=c313bd2e-b00c-413d-ac31-50201b059e73'  >
          
          </Container>

      
          </Stack>
          <Box width={'100%'} display={'flex'} sx={{ display: { xs: 'none', md: 'flex' , margin:0, justifyContent:'flex-end'}}}>
          <Button><a href="#mision">SOBRE NOSOTROS</a></Button> 
          <Button> <a href="#contacto">Contactanos</a> </Button>
            <Button color="inherit">Galería</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{color:'white', width: 250,backgroundColor:'rgba(3,162,108,255)', height:'100vh'  }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Donar" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Sobre Nosotros" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Galería" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Nav;
