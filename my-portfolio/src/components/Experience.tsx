import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3">
                Airports Authority of India
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Assistant Manager, IT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Apr 2019 - Present
              </Typography>
              <ul>
                <li>Responsible for planning and implementation of the latest technological advancements in IT Directorate</li>
                <li>Managed key applications and ministry projects including AirSewa, AAI Startup Initiative, AIMS, etc.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3">
                Made Easy Education Pvt. Ltd.
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Research and Development Wing, CSE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aug-Nov 2018
              </Typography>
              <ul>
                <li>Responsible for curating high quality problems for Made Easy's flagship test series for competitive examinations such as GATE, etc.</li>
                <li>One problem that I had created for Made Easy Test Series was featured directly in GATE 2019 paper organized by IIT Madras.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
