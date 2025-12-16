import React from 'react';
import { Container, Typography, Card, CardContent, Stack, Box } from '@mui/material';
import iitDelhiLogo from '../assets/iit-delhi-logo.svg';

const Education: React.FC = () => {
  return (
    <Container id="education" maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Education
      </Typography>
      <Stack spacing={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Box
                component="img"
                src={iitDelhiLogo}
                alt="IIT Delhi Logo"
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: 'contain',
                }}
              />
              <Box sx={{ flex: 1, minWidth: 200 }}>
                <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 0.5 }}>
                  M.S. (Research), Artificial Intelligence
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Indian Institute of Technology, Delhi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2023 - Present
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h3" sx={{ color: 'primary.main', mb: 0.5 }}>
              B.Tech. (CSE)
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
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
      </Stack>
    </Container>
  );
};

export default Education;
