"use client"
import { Button, CircularProgress, Snackbar } from '@mui/material';
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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button
        variant="contained"
        onClick={fetchRandomUser}
        disabled={loading}
        style={{ marginBottom: '10px' }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Fetch Random User'}
      </Button>

      {error && (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
          <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>{error}</div>
        </Snackbar>
      )}

      {user && (
        <div style={{ marginTop: '20px' }}>
          <h2>User Information</h2>
          <p>Name: {`${user.name.first} ${user.name.last}`}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default RandomUserButton;
