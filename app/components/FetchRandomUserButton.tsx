// FetchRandomUserButton.tsx

import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

interface FetchRandomUserButtonProps {
  onFetchRandomUser: () => Promise<void>;
}

const FetchRandomUserButton: React.FC<FetchRandomUserButtonProps> = ({ onFetchRandomUser }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchRandomUser = async () => {
    setLoading(true);
    setError(null);

    try {
      await onFetchRandomUser();
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleFetchRandomUser}
        disabled={loading}
        className="fetch-button"
        style={{ backgroundColor: '#00f181', marginLeft: '10px' }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Random User'}
      </Button>

      {error && (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default FetchRandomUserButton;
