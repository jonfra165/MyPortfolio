import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0, boxShadow: 'none', marginBottom: '20px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Header />
          <Link to="/contact">
            <Button to="/contact"
              sx={{ color: '#2b2d42', textDecoration: 'none', '&:hover': { color: '#2196f3', textDecoration: 'underline' }, fontSize: 16 }}
            >
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: '100px' }}>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
