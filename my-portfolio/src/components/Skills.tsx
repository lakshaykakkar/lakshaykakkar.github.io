import React from 'react';
import { Container, Typography, Chip, Box, Divider } from '@mui/material';

const Skills: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Key Courses Taken at IIT Delhi
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
        <Chip 
          label="Machine Learning (COL774)" 
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            fontWeight: 600,
            '&:hover': { bgcolor: 'primary.dark' }
          }} 
        />
        <Chip 
          label="Natural Language Processing (ELL881)" 
          sx={{ 
            bgcolor: 'secondary.main', 
            color: 'primary.main',
            fontWeight: 600,
            '&:hover': { bgcolor: 'secondary.light' }
          }} 
        />
        <Chip 
          label="Mathematical Foundations of MINDS/AI (AIL702)" 
          sx={{ 
            bgcolor: 'info.main', 
            color: 'white',
            fontWeight: 600,
            '&:hover': { bgcolor: 'info.dark' }
          }} 
        />
        <Chip 
          label="Social Computing (COL865)" 
          sx={{ 
            bgcolor: 'success.main', 
            color: 'white',
            fontWeight: 600,
            '&:hover': { bgcolor: 'success.dark' }
          }} 
        />
        <Chip 
          label="Data Wrangling (COL868)" 
          sx={{ 
            bgcolor: 'warning.main', 
            color: 'white',
            fontWeight: 600,
            '&:hover': { bgcolor: 'warning.dark' }
          }} 
        />
        <Chip 
          label="Data Visualization (ELL824)" 
          sx={{ 
            bgcolor: 'error.main', 
            color: 'white',
            fontWeight: 600,
            '&:hover': { bgcolor: 'error.dark' }
          }} 
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Skills
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
        Key Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
        {['Machine Learning', 'Deep Learning', 'Diffusion Models', 'Large Language Models (LLMs)', 'Algorithms and Data Structures', 'Hyperparameter Tuning'].map((skill, index) => (
          <Chip 
            key={index}
            label={skill}
            sx={{
              bgcolor: index % 3 === 0 ? 'rgba(0, 51, 102, 0.1)' : index % 3 === 1 ? 'rgba(66, 153, 225, 0.15)' : 'rgba(255, 215, 0, 0.2)',
              color: index % 3 === 0 ? 'primary.main' : index % 3 === 1 ? 'info.main' : 'secondary.dark',
              border: '1.5px solid',
              borderColor: index % 3 === 0 ? 'primary.light' : index % 3 === 1 ? 'info.light' : 'secondary.main',
              fontWeight: 600,
            }}
          />
        ))}
      </Box>

      <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
        Programming/Misc
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {['Python', 'C', 'C++', 'PyTorch', 'Numpy', 'Scikit-Learn', 'Shell Scripting', 'Git', 'Jupyter', 'VS Code'].map((tool, index) => (
          <Chip 
            key={index}
            label={tool}
            sx={{
              bgcolor: 'rgba(0, 51, 102, 0.06)',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'rgba(0, 51, 102, 0.2)',
              fontWeight: 500,
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
