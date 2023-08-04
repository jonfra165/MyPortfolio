import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/cv">
          <Button
            sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}
          >
            CV
          </Button>
        </Link>
        <Link to="/experience">
          <Button
            sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}
          >
            EXPERIENCE
          </Button>
        </Link>
        <Link to="/projects">
          <Button
            sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}
          >
            PROJECTS
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}
          >
            CONTACT
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
