// FetchMaleUserButton.tsx

import React, { useState } from 'react';
import { Button, CircularProgress, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

interface FetchMaleUserButtonProps {
  onFetchMaleUser: () => Promise<void>;
}

const FetchMaleUserButton: React.FC<FetchMaleUserButtonProps> = ({ onFetchMaleUser }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchMaleUser = async () => {
    setLoading(true);
    setError(null);

    try {
      await onFetchMaleUser();
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
        onClick={handleFetchMaleUser}
        disabled={loading}
        className="fetch-button"
        style={{ backgroundColor: '#00f181', marginLeft: '10px' }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Fetch Male User'}
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

export default FetchMaleUserButton;
