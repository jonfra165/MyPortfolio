import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import Experience from './components/Experience';

const theme = createTheme({
  // Your custom theme configuration
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <WelcomePage />
        <HomePage />
        <Experience />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
