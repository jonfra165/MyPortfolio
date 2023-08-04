import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Dialog, DialogContent, useMediaQuery } from '@mui/material';
import ContactForm from './ContactForm';

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const handleExperienceClick = () => {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (content) => {
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0, boxShadow: 'none', marginBottom: '20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
        <Button sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }} onClick={() => handleClick('cv')}>
          CV
        </Button>
        {!isMobile && (
          <Button sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16, marginLeft: 2 }} onClick={handleExperienceClick}>
            Experience
          </Button>
        )}
        <Button sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16, marginLeft: isMobile ? 0 : 2 }} onClick={() => handleClick('contact')}>
          Contact
        </Button>  
      </Toolbar>
      {/* Image/Contact Dialog */}
      <Dialog open={open} onClose={handleClose}>
  <DialogContent>
    {dialogContent === 'cv' ? (
      <img
        src={'../images/jonna_CV.pdf'}
        alt="CV"
        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
        onClick={handleClose}
      />
    ) : (
      <ContactForm onClick={handleClose} />
    )}
  </DialogContent>
</Dialog>
    </AppBar>
  );
};

export default Header;
