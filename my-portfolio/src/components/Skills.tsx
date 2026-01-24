import React from 'react';
import { Container, Typography, Chip, Box, Divider } from '@mui/material';

const Skills: React.FC = () => {
  const keySkills = [
    'Machine Learning',
    'Deep Learning',
    'Diffusion Models',
    'Large Language Models (LLMs)',
    'Algorithms and Data Structures',
    'Hyperparameter Tuning'
  ];

  const programmingTools = [
    'Python',
    'C',
    'C++',
    'PyTorch',
    'Numpy',
    'Scikit-Learn',
    'Shell Scripting',
    'Git',
    'Jupyter',
    'VS Code'
  ];

  const skillStyles = [
    {
      bgcolor: 'rgba(26, 54, 93, 0.1)',
      color: 'primary.main',
      borderColor: 'primary.light',
    },
    {
      bgcolor: 'rgba(59, 130, 246, 0.15)',
      color: 'info.main',
      borderColor: 'info.light',
    },
    {
      bgcolor: 'rgba(13, 148, 136, 0.15)',
      color: 'secondary.main',
      borderColor: 'secondary.light',
    },
  ];

  const getSkillStyle = (index: number) => skillStyles[index % skillStyles.length];

  return (
    <Container id="skills" maxWidth="md" sx={{ my: 4 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ mb: 3 }}
        className="animate-fade-in"
      >
        Key Courses Taken at IIT Delhi
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
        <Chip 
          label="Machine Learning (COL774)" 
          className="animate-fade-in-bounce delay-1"
          sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'primary.dark',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
        <Chip 
          label="Natural Language Processing (ELL881)" 
          className="animate-fade-in-bounce delay-2"
          sx={{ 
            bgcolor: 'secondary.main', 
            color: 'primary.main',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'secondary.light',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
        <Chip 
          label="Mathematical Foundations of MINDS/AI (AIL702)" 
          className="animate-fade-in-bounce delay-3"
          sx={{ 
            bgcolor: 'info.main', 
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'info.dark',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
        <Chip 
          label="Social Computing (COL865)" 
          className="animate-fade-in-bounce delay-4"
          sx={{ 
            bgcolor: 'success.main', 
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'success.dark',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
        <Chip 
          label="Data Wrangling (COL868)" 
          className="animate-fade-in-bounce delay-5"
          sx={{ 
            bgcolor: 'warning.main', 
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'warning.dark',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
        <Chip 
          label="Data Visualization (ELL824)" 
          className="animate-fade-in-bounce delay-6"
          sx={{ 
            bgcolor: 'error.main', 
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': { 
              bgcolor: 'error.dark',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }} 
        />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ mb: 3 }}
        className="animate-slide-left"
      >
        Skills
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
        Key Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
        {keySkills.map((skill, index) => {
          const style = getSkillStyle(index);
          return (
            <Chip 
              key={index}
              label={skill}
              sx={{
                ...style,
                border: '1.5px solid',
                fontWeight: 600,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }
              }}
            />
          );
        })}
      </Box>

      <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'primary.main', mb: 2 }}>
        Programming/Misc
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {programmingTools.map((tool, index) => (
          <Chip 
            key={index}
            label={tool}
            sx={{
              bgcolor: 'rgba(26, 54, 93, 0.06)',
              color: 'text.primary',
              border: '1px solid',
              borderColor: 'rgba(26, 54, 93, 0.2)',
              fontWeight: 500,
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
