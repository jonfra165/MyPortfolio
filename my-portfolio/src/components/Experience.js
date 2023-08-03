import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Experience = () => {
  const experiences = [
    { year: '2014', title: 'Experience 2014', description: 'Description for 2014 experience' },
    { year: '2016', title: 'Experience 2016', description: 'Description for 2016 experience' },
    { year: '2018', title: 'Experience 2018', description: 'Description for 2018 experience' },
    { year: '2020', title: 'Experience 2020', description: 'Description for 2020 experience' },
    { year: '2023', title: 'Experience 2023', description: 'Description for 2023 experience' },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }} id="experience-section">
      <Grid container spacing={2} alignItems="center">
        {experiences.map((experience) => (
          <React.Fragment key={experience.year}>
            {/* Year */}
            <Grid item xs={12} md={2}>
              <Typography variant="h5">{experience.year}</Typography>
            </Grid>

            {/* Experience content */}
            <Grid item xs={12} md={10}>
              <Typography variant="h6">{experience.title}</Typography>
              <Box>{experience.description}</Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
