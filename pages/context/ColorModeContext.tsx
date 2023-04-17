import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface ColorModeProps{
    children: React.ReactNode
}

export const ColorModeProvider = ({children}: ColorModeProps)=>{
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );

    const theme = React.useMemo(
        () =>
          createTheme({
            breakpoints: {
              values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
              },
            },
            palette: {
              primary: {
                main: '#9374fa',
              },
              secondary: {
                main: '#9374fa',
              },
              mode:
                mode === 'light'
                  ? 'light'
                  : 'dark',
              background: {
                default: mode === 'light' ? '#FFF' : '#050409',
                paper: mode === 'light' ? '#FFF' : '#000',
              },
              text: {
                primary: mode === 'light' ? '#9374fa' : '#9374fa',
                secondary: mode === 'light' ? '9f76ff' : '#9374fa',
              },
            },
            components: {
              MuiButton: {
                styleOverrides: {
                  root: {
                    borderRadius: 20 / 2,
                  },
                },
              },
              MuiPaper: {
                styleOverrides: {
                  root: {
                    backgroundColor: mode === 'light' ? '#FFFBFF' : '#202020',
                    borderRadius: 20 / 2,
                  },
                },
              },
            },
            typography: {
              fontFamily: [
                'Roboto',
                'sans-serif',
              ].join(','),
              button: {
                textTransform: 'none',
              },
              h1: {
                fontSize: '2.5rem',
                fontWeight: 500,
                lineHeight: 1.167,
                letterSpacing: '0em',
              },
              h2: {
                fontSize: '2rem',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '0em',
              },
              h3: {
                fontSize: '1.75rem',
                fontWeight: 500,
                lineHeight: 1.167,
                letterSpacing: '0em',
              },
              h4: {
                fontSize: '1.5rem',
                fontWeight: 500,
                lineHeight: 1.235,
                letterSpacing: '0em',
              },
              h5: {
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.334,
                letterSpacing: '0em',
              },
              h6: {
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: '0em',
              },
              subtitle1: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.75,
                letterSpacing: '0.00938em',
              },
              subtitle2: {
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.57,
                letterSpacing: '0.00714em',
              },
              body1: {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.43,
                letterSpacing: '0.01071em',
              },
              body2: {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.43,
                letterSpacing: '0.01071em',
              },
              caption: {
                fontSize: '0.75rem',
                fontWeight: 400,
                lineHeight: 1.66,
                letterSpacing: '0.03333em',
              },
              overline: {
                fontSize: '0.75rem',
                fontWeight: 400,
                lineHeight: 2.66,
                letterSpacing: '0.08333em',
              },
            },
            shape: {
              borderRadius: 20,
            },
           
            },
          ),
        [mode],
      );
    
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext



  

 
