import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import experiencesData from '../experience.json'; // Import experienceJSON file

const Experience = () => {
  const experiences = experiencesData.experiences;

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', margin: 'auto', paddingBottom: '100px' }} id="experience-section">
      <Grid container spacing={2} alignItems="center">
        {experiences.map((experience) => (
          <React.Fragment key={experience.id}>
            {/* Company */}
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1">{experience.company}</Typography>
              <Typography variant="subtitle2">
                {experience.position} - {experience.duration}
              </Typography>
              <Typography variant="body1" fontSize={12}>
                {experience.description}
              </Typography>
              <Typography variant="body1" fontSize={12} fontStyle="italic">
                {experience.skills.join(', ')}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
