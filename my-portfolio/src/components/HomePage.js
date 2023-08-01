import React from 'react';
import { Container, Grid, Box, useMediaQuery } from '@mui/material';
import jonnaImage from '../images/JonnaCPH.JPG';

const HomePage = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  /*const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));*/
  
  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={isMobile ? 0 : 1}>
        {/* Första boxen med text */}
        <Grid item xs={12} sm={6}>
          <Box>
            {/* Använd variabeln för att referera till den importerade bilden */}
            <img src={jonnaImage} alt="Bild på mig" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        {/* Andra boxen med bild */}    
        <Grid item xs={12} sm={6}>
          <Box>
            {/* Använd variabeln för att referera till den importerade bilden */}
            <img src={jonnaImage} alt="Bild på mig" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
