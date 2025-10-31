import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Divider } from '@mui/material';

const Education: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3">
                MS (CSE)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Indian Institute of Technology, Delhi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2023 - Present
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3">
                B.Tech. (CSE)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Guru Gobind Singh Indraprastha University, Delhi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2013 - 2017
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CGPA: 70.07
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
