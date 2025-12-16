import React from 'react';
import { Container, Typography, Card, CardContent, Stack, Box } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <Container id="experience" maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Experience
      </Typography>
      <Stack spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 0.5 }}>
              Airports Authority of India
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'secondary.dark', fontWeight: 600, mb: 0.5 }}>
              Assistant Manager IT
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Apr 2019 - Present
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1, '& li': { mb: 1, color: 'text.primary' } }}>
              <li>Responsible for planning and implementation of the latest technological advancements in IT Directorate</li>
              <li>Managed key applications and ministry projects including AirSewa, AAI Startup Initiative, AIMS, etc.</li>
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 0.5 }}>
              Made Easy Education Pvt. Ltd.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'secondary.dark', fontWeight: 600, mb: 0.5 }}>
              Research and Development Wing, CSE
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Aug-Nov 2018
            </Typography>
            <Box component="ul" sx={{ pl: 2, mt: 1, '& li': { mb: 1, color: 'text.primary' } }}>
              <li>Responsible for curating high quality problems for Made Easy's flagship test series for competitive examinations such as GATE, etc.</li>
              <li>One problem that I had created for Made Easy Test Series was featured directly in GATE 2019 paper organized by IIT Madras.</li>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default Experience;
