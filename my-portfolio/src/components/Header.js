import React from 'react';
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material';

const Header = () => {
  const handleExperienceClick = () => {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0, boxShadow: 'none', marginBottom: '20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button sx={{ color: '#2b2d42', '&:hover': { color: '#2196f3' }, fontSize: 16 }}>CV</Button>
          <Button sx={{ color: '#2b2d42', '&:hover': { color: '#2196f3' }, fontSize: 16 }} onClick={handleExperienceClick}>
            Experience
          </Button>
          <Button sx={{ color: '#2b2d42', '&:hover': { color: '#2196f3' }, fontSize: 16 }}>Contact</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
