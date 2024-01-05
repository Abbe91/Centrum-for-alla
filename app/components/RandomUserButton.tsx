"use client"
import { Snackbar, Card, CardContent, Typography, Avatar } from '@mui/material';
import Alert from '@mui/material/Alert';
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import FetchMaleUserButton from './FetchMaleUserButton';
import FetchFemaleUserButton from './FetchFemaleUserButton';
import { fetchRandomUser, fetchMaleUser, fetchFemaleUser } from './api';
import FetchRandomUserButton from './FetchRandomUserButton';

const RandomUserButton: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const handleFetchMaleUser = async () => {
    try {
      const userData = await fetchMaleUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching male user:', error);
    }
  };

  const handleFetchFemaleUser = async () => {
    try {
      const userData = await fetchFemaleUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching female user:', error);
    }
  };

  const handleFetchRandomUser = async () => {
    try {
      const userData = await fetchRandomUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching Random user:', error);
    }
  };

  return (
    <Card  className= "card-box">
        <Grid item xs={12} sm={6}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                Random User App
                </Typography>
                <FetchMaleUserButton onFetchMaleUser={handleFetchMaleUser} />
                <FetchFemaleUserButton onFetchFemaleUser={handleFetchFemaleUser} />
                <FetchRandomUserButton onFetchRandomUser={handleFetchRandomUser} />
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
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                        <strong>Username:</strong> {user.login.username}
                        </Typography>
                    </Grid>

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
      </Grid>
    </Card>
  );
};

export default RandomUserButton;