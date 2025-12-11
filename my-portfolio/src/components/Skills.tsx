import React from 'react';
import { Container, Typography, Chip, Box, Divider } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Key Courses Taken at IIT Delhi
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <Chip label="Machine Learning (COL774)" />
        <Chip label="Natural Language Processing (ELL881)" />
        <Chip label="Mathematical Foundations of MINDS/AI (AIL702)" />
        <Chip label="Social Computing (COL865)" />
        <Chip label="Data Wrangling (COL868)" />
        <Chip label="Data Visualization (ELL824)" />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        Key Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <Chip label="Machine Learning" />
        <Chip label="Deep Learning" />
        <Chip label="Diffusion Models" />
        <Chip label="Large Language Models (LLMs)" />
        <Chip label="Algorithms and Data Structures" />
        <Chip label="Hyperparameter Tuning" />
      </Box>

      <Typography variant="h6" component="h3" gutterBottom>
        Programming/Misc
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Chip label="Python" />
        <Chip label="C" />
        <Chip label="C++" />
        <Chip label="PyTorch" />
        <Chip label="Numpy" />
        <Chip label="Scikit-Learn" />
        <Chip label="Shell Scripting" />
        <Chip label="Git" />
        <Chip label="Jupyter" />
        <Chip label="VS Code" />
      </Box>
    </Container>
  );
};

export default Skills;
