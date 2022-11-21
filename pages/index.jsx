import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useColorMode from '../hooks/useColorMode';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './components/endereço';
import PaymentForm from './components/pay';
import Review from './components/view';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';



function Copyright() {

    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color='#fff300' href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const steps = ['Dados', 'Enviar Solicitação', 'Review your order'];
  
  function getStepContent(step = number) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  const theme = createTheme();
  
  export default function Home() {

   

    const theme = useTheme();
    const colorMode = useColorMode();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  return (
    <ThemeProvider theme={theme} >
    <CssBaseline />
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar sx={{  minWidth:220, m:0, p:0, bgcolor:"yellow", color: 'black', }}>
        <Typography variant="h6" color="inherit" noWrap sx={{display: 'flex', justifyContent: 'flex-center',flexGrow: 1   }} component="h1"

              >
          Solicitação de Horas Extras
        </Typography>
      </Toolbar>
    </AppBar>
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, }}>
        <Typography component="h1" variant="h4" align="center">
          Dados da Solicitação
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Voltar
                </Button>
              )}
               <Button  sx={{ mt: 3, ml: 1 }} type="reset" startIcon={<SyncRoundedIcon />}>
                  Resetar
                </Button>
              <Button
                variant="contained"
                 onClick={handleNext}
             
                sx={{ mt: 3, ml: 1 }}
                type="submit"
                startIcon={<TaskAltRoundedIcon />}
              >
                {activeStep === steps.length - 1 ? 'Enviar' : 'Confirmar'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
      <Copyright />
    </Container>
   
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>


  </ThemeProvider>
);
}