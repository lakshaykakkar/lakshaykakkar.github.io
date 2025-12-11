import React from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Research Project at IIT Delhi
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h3">
            Synthetic Tabular Data Generation using Diffusion Models
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Guide: Prof. Srikanta Bedathur
          </Typography>
          <Typography variant="body2" color="text.secondary">
            August 2024 - ongoing
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="This project explores the application of diffusion models for generating high-quality, privacy preserving synthetic tabular data." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Our research aims to focus on plausibility of the data generated which is not given enough emphasis by existing works in this area" />
            </ListItem>
            <ListItem>
              <ListItemText primary="We will also be looking at ways to incorporate domain level constraints into the model which are not necessarily captured by the dataset instance available at hand" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography variant="h4" component="h2" gutterBottom>
        Paper Presentations Delivered at IIT Delhi
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="EntQA: Entity Linking as Question Answering, Zhang et al., 2022" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deep Learning for Entity Matching: A Design Space Exploration, Mudgal et al., 2018" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Discovery of genuine functional dependencies from relational data with missing values, Eguille et al., 2018" />
        </ListItem>
      </List>

      <Typography variant="h4" component="h2" gutterBottom>
        Some of the Course Projects Done at IIT Delhi
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Detecting Sarcasm in News Headlines" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Transforming Handwritten Math Equations to Latex" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Predicting Google's Stock Prices using RNNs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Multilabel Classification of Research Articles" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Visualizing Layoffs: Uncovering Insights" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Implementation of ML algorithms from scratch" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Projects;
