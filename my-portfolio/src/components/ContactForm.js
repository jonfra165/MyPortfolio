import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
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
    // Skicka formData till API eller backend för e-postutskick
    // Exempel: Använd axios eller fetch för att skicka POST-request till backend
    // Du kan använda Node.js och Nodemailer för att skicka e-postmeddelandet från backend
    // Ett fullständigt exempel på hur du konfigurerar en Node.js-server med Nodemailer är utanför omfånget för detta svar.
    console.log(formData);
    // Återställ formuläret efter inlämning om du vill
    // setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
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
          rows={4}
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
    </Container>
  );
};

export default ContactForm;
