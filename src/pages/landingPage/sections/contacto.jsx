import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./styles/contacto.css"

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('Requerido'),
  correo: Yup.string().email('Correo inválido').required('Requerido'),
  telefono: Yup.string().required('Requerido'),
  edad: Yup.number().required('Requerido'),
  plan: Yup.string().required('Requerido'),
});

function ContactSection() {
  return (
    <Box className="contact-section" sx={{ height: {md:'120vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} className="contact-container" sx={{ width: '80%', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
        
        {/* Texto de la izquierda */}
        <Grid item xs={12} md={6}>
          <Typography fontSize={{xs:'8vw', md:'4vw'}} variant="h3" color="white" gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            Contáctanos hoy mismo para obtener más información sobre nuestros servicios y programas diseñados para mejorar la calidad de vida de los adultos mayores. Nuestro equipo de profesionales estará encantado de atenderte y guiarte a través del proceso de inscripción.
          </Typography>
        </Grid>

        {/* Formulario de la derecha */}
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={{
              nombre: '',
              correo: '',
              telefono: '',
              edad: '',
              plan: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Aquí puedes manejar el envío del formulario
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className='form' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Field
                  as={TextField}
                  name="nombre"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  error={touched.nombre && Boolean(errors.nombre)}
                  helperText={touched.nombre && errors.nombre}
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
                  name="correo"
                  label="Correo"
                  variant="outlined"
                  fullWidth
                  error={touched.correo && Boolean(errors.correo)}
                  helperText={touched.correo && errors.correo}
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
                  name="telefono"
                  label="Teléfono"
                  variant="outlined"
                  fullWidth
                  error={touched.telefono && Boolean(errors.telefono)}
                  helperText={touched.telefono && errors.telefono}
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
                  name="edad"
                  label="Edad"
                  variant="outlined"
                  fullWidth
                  error={touched.edad && Boolean(errors.edad)}
                  helperText={touched.edad && errors.edad}
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
                  name="plan"
                  label="Plan que te interesa"
                  variant="outlined"
                  fullWidth
                  error={touched.plan && Boolean(errors.plan)}
                  helperText={touched.plan && errors.plan}
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
                <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;
