import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Dialog, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';  
import cvImage from '../images/Jonna_Franzen_CV.pdf'; // Replace with the path to your CV image
import ContactForm from './ContactForm';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleExperienceClick = () => {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCVClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0, boxShadow: 'none', marginBottom: '20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ color: '#2b2d42', textDecoration: 'none','&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }} onClick={handleCVClick}>
            About
          </Button>
          <Button sx={{ color: '#2b2d42', textDecoration: 'none','&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }} onClick={handleCVClick}>
            CV
          </Button>
          <Button sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }} onClick={handleExperienceClick}>
            Experience
          </Button>
          <Link to="/contact" component={ContactForm}> {/* Use Link to navigate to ContactForm */}
          <Button
 sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}>Contact</Button>
          </Link>

          
      </Toolbar>
      {/* Image Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={cvImage}
            alt="CV"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={handleClose}
          />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
