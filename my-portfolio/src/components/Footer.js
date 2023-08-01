import { AppBar, Toolbar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/jonna-franzén-a2bb77148/';
  const githubUrl = 'https://github.com/jonfra165';
  const emailAddress = 'jonna.franzen@hotmail.com';


  return (
    <AppBar  position="fixed" sx={{ backgroundColor: 'white', top: 'auto',boxShadow: 'none', bottom: 0}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center'}}>
        <IconButton
          edge="end"
          color="2b2d42"
          aria-label="LinkedIn"
          href={linkedInUrl}
          target="_blank"
          sx={{ marginRight: '2px' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton 
            edge="end" 
            color="2b2d42" 
            aria-label="GitHub" 
            href={githubUrl} 
            target="_blank"
            sx={{ marginRight: '2px' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton 
            edge="end" 
            color="2b2d42" 
            aria-label="E-post" 
            href={`mailto:${emailAddress}`} 
            target="_blank" 
            sx={{ marginRight: '2px' }}>
          <MailOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
