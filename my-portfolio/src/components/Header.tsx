import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Container id="about" maxWidth="md" sx={{ mb: 6 }}>
      <Paper
        elevation={3}
        sx={{
          textAlign: 'center',
          p: 4,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Lakshay Kakkar
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Assistant Manager (IT) at Airports Authority of India
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          color="text.secondary"
          sx={{
            fontWeight: 500,
            mb: 3,
          }}
        >
          Pursuing MS(Research) in Diffusion Models at IIT Delhi, focusing on Synthetic Tabular Data Generation
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mt: 3,
          }}
        >
          <Box
            sx={{
              px: 3,
              py: 1,
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 2,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'scale(1.05)',
              },
            }}
          >
            +91-88601 00770
          </Box>
          <Box
            sx={{
              px: 3,
              py: 1,
              bgcolor: 'secondary.main',
              color: 'primary.main',
              borderRadius: 2,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'secondary.light',
                transform: 'scale(1.05)',
              },
            }}
          >
            lakshayk7k@gmail.com
          </Box>
          <Box
            sx={{
              px: 3,
              py: 1,
              bgcolor: 'info.main',
              color: 'white',
              borderRadius: 2,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'info.dark',
                transform: 'scale(1.05)',
              },
            }}
          >
            lakshay@cse.iitd.ac.in
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Header;
