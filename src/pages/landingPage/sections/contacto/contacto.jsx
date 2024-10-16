import React, { useState, useRef, useEffect } from 'react';
import { Grid, Typography, TextField, Button, Box, Alert, Snackbar, CircularProgress, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import "../styles/contacto.css";
import validationSchema from './validationSchema';

function ContactSection() {
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const contactRef = useRef(null);

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  useEffect(() => {
    if (window.location.hash === '#contacto' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <Box id="contacto" ref={contactRef} className="contact-section" sx={{ height: { xs: '140vh', md: '160vh' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} className="contact-container" sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
        {loading && (
          <Box 
            ref={loaderRef} 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'rgba(0, 0, 0, 0.1)', 
              borderRadius: '1rem', 
              zIndex: 1 
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}

        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Typography style={{fontFamily:"borel, cursive"}} fontSize={{ xs: '8vw', md: '4vw', }} variant="h3" color="white" gutterBottom>
            contáctanos
          </Typography>
          <Typography width={{ md: '60%' }} variant="body1" color="white" paragraph>
            Contáctanos hoy mismo para obtener más información sobre nuestros servicios y programas diseñados para mejorar la calidad de vida de los adultos mayores. Nuestro equipo de profesionales estará encantado de atenderte y guiarte a través del proceso de inscripción.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Formik 
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              age: '',
              plan: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);
              setLoading(true);
              try {
                const response = await axios.post('http://localhost:3000/create-user', values);
                if(!response) throw new Error('Hubo un error al crear el usuario')
                setAlert({ open: true, message: ' Te informamos que tu usuario ha sido creado con éxito. A tu correo electrónico llegará información sobre el plan que elegiste, así como enlaces para contacto directo.Por favor, revisa también tu bandeja de spam', severity: 'success' });
                resetForm();
              } catch (error) {
                console.log(error.response);
                setAlert({ open: true, message: error.response.data, severity: 'error' });
              } finally {
                setLoading(false);
              }
            }}
          >
           
            {({ errors, touched, setFieldValue }) => (
              <Form className='form' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Field
                  as={TextField}
                  name="fullName"
                  label="Nombre completo"
                  variant="outlined"
                  fullWidth
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                  InputProps={{
                    sx: {
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid white',
                      color: 'white',
                      outline: 'none',
                      padding: '8px 0',
                      boxShadow: 'none',
                      '&:hover, &:focus': {
                        borderBottomColor: '#90caf9',
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      color: 'white',
                    }
                  }}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Correo electrónico"
                  variant="outlined"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    sx: {
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid white',
                      color: 'white',
                      outline: 'none',
                      padding: '8px 0',
                      boxShadow: 'none',
                      '&:hover, &:focus': {
                        borderBottomColor: '#90caf9',
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      color: 'white',
                    }
                  }}
                /> 
                <Field 
                  as={TextField}
                  name="phone"
                  label="Teléfono"
                  variant="outlined"
                  fullWidth
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  InputProps={{
                    sx: {
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid white',
                      color: 'white',
                      outline: 'none',
                      padding: '8px 0',
                      boxShadow: 'none',
                      '&:hover, &:focus': {
                        borderBottomColor: '#90caf9',
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      color: 'white',
                    }
                  }}
                />
                <Field
                  as={TextField}
                  name="age"
                  label="Edad"
                  variant="outlined"
                  fullWidth
                  error={touched.age && Boolean(errors.age)}
                  helperText={touched.age && errors.age}
                  InputProps={{
                    sx: {
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid white',
                      color: 'white',
                      outline: 'none',
                      padding: '8px 0',
                      boxShadow: 'none',
                      '&:hover, &:focus': {
                        borderBottomColor: '#90caf9',
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      color: 'white',
                    }
                  }}
                />

                <FormControl fullWidth variant="outlined" error={touched.plan && Boolean(errors.plan)}>
                  <InputLabel id="plan-label" sx={{ color: 'white' }}>Plan que te interesa</InputLabel>
                  <Field
                    as={Select}
                    labelId="plan-label"
                    name="plan"
                    label="Plan que te interesa"
                    onChange={(e) => setFieldValue('plan', e.target.value)}
                    sx={{
                      background: 'transparent',
                      color: 'white',
                      '& .MuiSelect-select': {
                        border: 'none',
                        borderBottom: '2px solid white',
                      },
                      '&:hover .MuiSelect-select': {
                        borderBottomColor: '#90caf9',
                      },
                    }}
                  >
                    <MenuItem value={'Hogar permanente compartido'}>Hogar permanente compartido</MenuItem>
                    <MenuItem value={'Hogar permanente VIP'}>Hogar permanente VIP</MenuItem>
                    <MenuItem value={'Hogar de vacaciones'}>Hogar de vacaciones</MenuItem>
                    <MenuItem value={'Hogar permanente VIP compartido'}>Hogar permanente VIP compartido</MenuItem>
                    <MenuItem value={'Hogar cuidado diario'} >Hogar cuidado diario</MenuItem>
                  </Field>
                  {touched.plan && errors.plan && (
                    <Typography variant="caption" color="error">{errors.plan}</Typography>
                  )}
                </FormControl>

                <Button
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    padding: '0.5rem 1rem',
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: 'none'
                    }
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <Snackbar sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center' }} open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '50%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactSection;
