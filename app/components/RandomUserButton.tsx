"use client"
import { Button, CircularProgress, Snackbar, Card, CardContent, Typography, Avatar } from '@mui/material';
import Alert from '@mui/material/Alert';
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Grid, Box } from '@mui/material';
import { useState } from 'react';

const RandomUserButton: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ width: 'auto', margin: 'auto', textAlign: 'center' }}  className= "card-box">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Random User App
        </Typography>

        <Button
          variant="contained"
          onClick={fetchRandomUser}
          disabled={loading}
          className="fetch-button"
          style={{ backgroundColor: '#00f181' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Fetch Random User'}
        </Button>

        {error && (
          <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
            <Alert severity="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          </Snackbar>
        )}

        {user && (
          <Box marginTop={4}>
            <Avatar
              alt={`${user.name.first} ${user.name.last}`}
              src={user.picture.large}
              sx={{ width: 120, height: 120, margin: 'auto' }}
            />

            <Box marginTop={3}>
              <Typography variant="h6" gutterBottom>
                {`${user.name.first} ${user.name.last}`}
              </Typography>

              <Grid container spacing={2}>
                {[
                  { label: 'Email', value: user.email },
                  {
                    label: 'Birthday',
                    value: new Date(user.dob.date).toLocaleDateString(),
                    icon: <CakeIcon />,
                  },
                  {
                    label: 'Gender',
                    value: user.gender === 'male' ? <MaleIcon /> : <FemaleIcon />,
                  },
                  { label: 'Nationality', value: user.nat },
                  {
                    label: 'Location',
                    value: `${user.location.city}, ${user.location.country}`,
                    icon: <LocationOnIcon />,
                  },
                  { label: 'Phone', value: user.phone, icon: <PhoneIcon /> },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>{item.label}:</strong>
                      {item.icon && <Box component="span" marginLeft={1}>{item.icon}</Box>}
                      {item.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default RandomUserButton;