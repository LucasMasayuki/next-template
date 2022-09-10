import { Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: { xs: '1vw', sm: '4vw', md: '17vw' },
            }}
          />
          <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h6">
            LOGO
          </Typography>{' '}
          <Box component="div" sx={{ flexGrow: 1 }} />
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;
