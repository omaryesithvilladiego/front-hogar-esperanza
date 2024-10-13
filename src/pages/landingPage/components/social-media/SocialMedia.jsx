import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, useMediaQuery } from "@mui/material";

const actions = [
    { icon: <Instagram sx={{ color: 'purple' }} />, name: 'Instagram' },
    { icon: <Facebook sx={{ color: 'blue' }} />, name: 'Facebook' },
    { icon: <WhatsApp sx={{ color: 'green' }} />, name: 'WhatsApp' },
];

function SocialMedia() {
    // Verifica si el ancho de la pantalla es mayor a 1050px
    const isLargeScreen = useMediaQuery('(min-width:1050px)');

    return (
        <Box>
            {!isLargeScreen ? (
                <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
                    <SpeedDial 
                        ariaLabel="SpeedDial basic example"
                        icon={
                            <SpeedDialIcon 
                                sx={{ 
                                    bgcolor: 'rgba(3,162,108,255)', 
                                    width: '100%', 
                                    height: '100%', 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    borderRadius: '4rem', 
                                    boxShadow:'none'
                                }} 
                            />
                        }
                        sx={{ 
                            overflow: 'hidden', 
                            display: 'flex', 
                            boxShadow: 'none' // Quitar la sombra por defecto
                        }}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </SpeedDial>
                </div>
            ) : (
                <Stack top={'50%'} left={'95%'} gap={'4rem'} style={{ color: 'white', zIndex: '1000' }} position={'fixed'}>
                    <Instagram fontSize="large" />
                    <Facebook fontSize="large" />
                    <WhatsApp fontSize="large" />
                </Stack>
            )}
        </Box>
    );
}

export default SocialMedia;
