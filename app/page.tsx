"use client"
import React, { useState, useEffect } from 'react';
import { IconButton, ThemeProvider, CssBaseline } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import RandomUserButton from '../app/components/RandomUserButton';
import Header from '../app/components/Header';
import { lightTheme, darkTheme } from '../app/components/themes';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <IconButton
          onClick={toggleDarkMode}
          className= "toggle-dark-light"
          sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Header />
        <RandomUserButton />
      </div>
    </ThemeProvider>
  );
};

export default Home;