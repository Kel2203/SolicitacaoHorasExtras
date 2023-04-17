import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Inputs from "./components/inputs";

import background from "./styled.module.css";
import Papers from "./components/Paper";
import Display from "./components/Display";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{mt:8}}>
      {"Copyright © "}

      <Link color="secondary" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



 export default function Home() {
  
  return (
    <>


      <CssBaseline />
      <div className={background.gradient}>
       <Display /> 
      <Papers >
      <Typography component="h1" variant="h4" align="center" sx={{ mb: 5, mt: 5 }}>
            Dados da Solicitação
          </Typography>
         
          <Inputs />
          </Papers> 
        <Copyright />
    

    
      
      </div>
    
 
    </>
    
   
  );
}
