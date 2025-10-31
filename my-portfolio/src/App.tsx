import React from 'react';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            My Portfolio
          </Typography>
          <Header />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </Box>
      </Container>
    </>
  );
};

export default App;
