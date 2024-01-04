"use client"
import { Button, CircularProgress, Snackbar, Card, CardContent, Typography, Avatar } from '@mui/material';
import Alert from '@mui/material/Alert';
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
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
    <Card sx={{ width: 400, margin: 'auto', textAlign: 'center', marginTop: '20px' }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Random User App
      </Typography>

      <Button
        variant="contained"
        onClick={fetchRandomUser}
        disabled={loading}
        className="fetch-button"
        style={{ marginTop: '20px' }}
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
        <div style={{ marginTop: '20px' }}>
          <Avatar
            alt={`${user.name.first} ${user.name.last}`}
            src={user.picture.large}
            sx={{ width: 120, height: 120, margin: 'auto' }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {`${user.name.first} ${user.name.last}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Birthday:</strong> {new Date(user.dob.date).toLocaleDateString()} <CakeIcon />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Gender:</strong> {user.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Nationality:</strong> {user.nat}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Location:</strong> <LocationOnIcon /> {`${user.location.city}, ${user.location.country}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Phone:</strong> <PhoneIcon /> {user.phone}
            </Typography>
        </CardContent>
        </div>
      )}
    </CardContent>
  </Card>
);
};

export default RandomUserButton;
