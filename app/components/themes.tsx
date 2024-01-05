import { createTheme } from '@mui/material/styles';

const commonThemeOptions = {
};

export const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    text: {
      primary: '#00f181', 
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    text: {
      primary: '#121212', 
    },
   
  },
});
