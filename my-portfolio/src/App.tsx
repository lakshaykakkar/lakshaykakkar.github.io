import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #F5F7FA 0%, #E6F2FF 50%, #F5F7FA 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: 6 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              align="center" 
              gutterBottom
              sx={{
                mb: 4,
                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 800,
              }}
            >
              My Portfolio
            </Typography>
            <Header />
            <Education />
            <Experience />
            <Projects />
            <Skills />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
