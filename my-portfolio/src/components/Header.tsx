import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Lakshay Kakkar
      </Typography>
      <Typography variant="h5" component="h2" color="text.secondary">
        Assistant Manager (IT) at Airports Authority of India
      </Typography>
      <Typography variant="h6" component="h3" color="text.secondary">
        Pursuing MS(Research) in CSE from IIT Delhi
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="+91-8860100770" />
        </ListItem>
        <ListItem>
          <ListItemText primary="lakshayk7k@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="csy237548@iitd.ac.in" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Header;
