"use client"
import { Button, CircularProgress, Snackbar, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
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
    <Card style={{ maxWidth: 400, margin: 'auto', textAlign: 'center', marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Random User App
        </Typography>

        <Button
          variant="contained"
          onClick={fetchRandomUser}
          disabled={loading}
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
            <CardMedia
              component="img"
              alt={`${user.name.first} ${user.name.last}`}
              height="140"
              image={user.picture.large}
              style={{ borderRadius: '50%', margin: 'auto' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {`${user.name.first} ${user.name.last}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Birthday:</strong> {new Date(user.dob.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Gender:</strong> {user.gender}
              </Typography>
              {/* Add more user details as needed */}
            </CardContent>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RandomUserButton;
