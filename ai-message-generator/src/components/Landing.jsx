import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from './Navbar';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Landing Page!
          </Typography>
          <Typography variant="body1">
            You have successfully logged in.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Landing;