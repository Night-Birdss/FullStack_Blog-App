import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook'; // Facebook ikonu
import TwitterIcon from '@mui/icons-material/Twitter'; // Twitter ikonu
import InstagramIcon from '@mui/icons-material/Instagram'; // Instagram ikonu



function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1976d2',
        color: 'white',
        py: 1,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Developed by FS Team


        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
