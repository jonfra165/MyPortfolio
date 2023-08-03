import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Switch

import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';

const theme = createTheme({
  // Your custom theme configuration
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />        
        {/* Use Switch to wrap the Route components */}
        <Routes>
          {/* Define the route for ContactForm */}
          
          <Route path="/contact" component={ContactForm} />
      
        </Routes>
        <AboutMe />
        <HomePage />
        <Experience />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
