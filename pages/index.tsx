import * as React from 'react'

import NavBar from './components/NavBar'
import CssBaseline from '@mui/material/CssBaseline'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Lists from './components/Lists'
import Inputs from './components/inputs'
import Paper2 from './components/Paper2'
import background from './styled.module.sass'
import Papers from './components/Paper'

import { createTheme, ThemeProvider } from "@mui/material/styles";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 8 }}
    >
      {'Copyright © '}
      <Link color="secondary" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Home() {
  
  return (
    <>
      <CssBaseline />
      <div className={background.gradient}  >
        <NavBar/>
   <Lists />
        <Paper2 />
        <Papers>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ mb: 5, mt: 5 }}
          >
            Dados da Solicitação
          </Typography>

          <Inputs />
        </Papers>
        
       
        <Copyright />
        </div>
    </>
  )
}
