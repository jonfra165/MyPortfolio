import React, { useState } from 'react';
import { Container, Grid, Typography, Dialog, DialogContent } from '@mui/material';
import aboutMe from '../images/Crosse.jpg';

const WelcomePage = () => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '100px' }}>
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {/* Title */}
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h2" fontFamily="Monoton">
          JONNA FRANZÉN
        </Typography>
        <Typography variant="h5" fontFamily="PT Serif">
          INFORMATION ARCHITECTURE
        </Typography>
      </Grid>

      {/* Image */}
      <Grid item xs={12} md={6} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        <img
          src={aboutMe} // Replace with the path to your image
          alt="jag"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>

      {/* Image Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={aboutMe} // Replace with the path to your image
            alt="Zoomjag"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={handleClose}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  </Container>
    
  );
};

export default WelcomePage;
