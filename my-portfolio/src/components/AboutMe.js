import React from 'react';
import { Container, Grid, Box, useMediaQuery } from '@mui/material';

const AboutMe = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  /*const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));*/
  
  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={isMobile ? 0 : 1}>
        {/* Första boxen med text */}
        <Grid item xs={12} sm={6}>
          <Box>
            <p style={{ width= 50%}}>
            I recently completed my studies in Computer and Information Science after three years of hard work, graduating in June 2023. Throughout my education, I gained hands-on experience in both backend and frontend development, with expertise in a wide range of technologies, including Bootstrap, Angular, React, Vue, Node, React Native, Django, and Flask. My optimism, energy, motivation, and loyalty are characteristics that define me both personally and professionally. With a strong foundation in object-oriented programming, interaction design, UX, and usability principles, I'm confident in my ability to create effective, sustainable and engaging digital experiences. I am a quick learner and always maintain a positive and flexible attitude. Whether it's expanding my existing knowledge or diving into unknown technologies, I'm always motivated to improve.

            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;