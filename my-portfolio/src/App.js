import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AboutMe />
      <HomePage />
      <Experience />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
