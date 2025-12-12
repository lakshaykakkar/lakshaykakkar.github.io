import React from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Box } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Research Project at IIT Delhi
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 1 }}>
            Conditional Synthetic Tabular Data Generation through Structured Diffusion
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'secondary.dark', fontWeight: 600, mb: 0.5 }}>
            Guide: Prof. Srikanta Bedathur
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            January 2025 - ongoing
          </Typography>
          <List>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText 
                primary="This project explores the application of diffusion models for generating high-fidelity synthetic tabular data satisfying User-Defined Constraints."
                sx={{ '& .MuiListItemText-primary': { color: 'text.primary' } }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemText 
                primary="Our research also aims to focus on plausibility of the data generated which is not given enough emphasis by existing works in this area"
                sx={{ '& .MuiListItemText-primary': { color: 'text.primary' } }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Paper Presentations Delivered at IIT Delhi
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <List>
            <ListItem sx={{ 
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
              mb: 1,
              bgcolor: 'rgba(26, 54, 93, 0.02)',
              borderRadius: 1,
            }}>
              <ListItemText 
                primary="EntQA: Entity Linking as Question Answering, Zhang et al., 2022"
                sx={{ '& .MuiListItemText-primary': { color: 'text.primary', fontWeight: 500 } }}
              />
            </ListItem>
            <ListItem sx={{ 
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
              mb: 1,
              bgcolor: 'rgba(26, 54, 93, 0.02)',
              borderRadius: 1,
            }}>
              <ListItemText 
                primary="Deep Learning for Entity Matching: A Design Space Exploration, Mudgal et al., 2018"
                sx={{ '& .MuiListItemText-primary': { color: 'text.primary', fontWeight: 500 } }}
              />
            </ListItem>
            <ListItem sx={{ 
              borderLeft: '4px solid',
              borderColor: 'secondary.main',
              bgcolor: 'rgba(26, 54, 93, 0.02)',
              borderRadius: 1,
            }}>
              <ListItemText 
                primary="Discovery of genuine functional dependencies from relational data with missing values, Eguille et al., 2018"
                sx={{ '& .MuiListItemText-primary': { color: 'text.primary', fontWeight: 500 } }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Some of the Course Projects Done at IIT Delhi
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {[
              'Detecting Sarcasm in News Headlines',
              'Transforming Handwritten Math Equations to Latex',
              "Predicting Google's Stock Prices using RNNs",
              'Multilabel Classification of Research Articles',
              'Visualizing Layoffs: Uncovering Insights',
              'Implementation of ML algorithms from scratch',
            ].map((project, index) => (
              <Box
                key={index}
                sx={{
                  px: 2,
                  py: 1.5,
                  bgcolor: 'rgba(26, 54, 93, 0.04)',
                  borderRadius: 2,
                  borderLeft: '3px solid',
                  borderColor: 'info.main',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(26, 54, 93, 0.08)',
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {project}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Projects;
