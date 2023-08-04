import React from 'react';
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StartPage from './components/StartPage';
import Cv from './components/Cv';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define a theme for your application
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid container direction="column">
          {/* Header */}
          <Grid item>
            <Header />
          </Grid>

          {/* Content */}
          <Grid item container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>

          {/* Footer */}
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
