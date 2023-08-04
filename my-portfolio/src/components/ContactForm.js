import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh" // Adjust the height to cover more or less of the viewport
      >
        <Paper elevation={3} style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
          <Typography variant="h5" fontFamily="PT Serif" gutterBottom>
            CONTACT ME
          </Typography>
          <Typography variant="subtitle1" fontFamily="PT Serif" color="textSecondary">
            Send me a message with your question!
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
              Send
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactForm;
