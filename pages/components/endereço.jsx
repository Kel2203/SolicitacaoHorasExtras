import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { useState } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import Head from 'next/head';
import {useForm} from  'react-hook-form';
import Fab from '@mui/material/Fab';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import Button from '@mui/material/Button';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';

export default function AddressForm() {
  

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [hora, setHora] = useState("");
  const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [justificativa, setJustificativa] = useState("");

  var [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const handleValidation = () => {let tempErrors = {};
  let isValid = true;
  if (nome.length <= 0) {tempErrors["nome"] = true;isValid = false;}
  if (justificativa.length <= 0) {tempErrors["justificativa"] = true;isValid = false;}
  if (hora.length <= 0) {tempErrors["hora"] = true;isValid = false;}
  if (email.length <= 0) {tempErrors["email"] = true;isValid = false;}
  setErrors({ ...tempErrors });
  console.log("errors", errors);
  return isValid;
};
const handleOnSubmit = async (e) => {e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {setButtonText("Sending");
    const res = await fetch("../api/sendgrid",
     {body: JSON.stringify({
        email: email,
        periodo: periodo,
        data: data,
        hora: hora,
        time: time,
        justificativa: justificativa,
        nome: nome,}),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });
    const { error } = await res.json();
    if (error) {console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Send");
}
console.log(nome, email, justificativa, hora, time, periodo, data);}; 

  var  { register,
       handleSubmit,
       
        formState: { errors }, // catch error messages
      } = useForm();
    
      function submitHandler(data) {
        console.log(data)
      }
      function submitHandler(data) {
        console.log(data)
        fetch('../api/sheet', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      // reset, reset(); // clears the input on submitting
      }
      function confirmar(){
        Swal.fire({
           title:'Dados Confirmados!',
          icon:'success',
          iconColor:'yellow',
          background:'#000',
          color:'#fff',
          showConfirmButton: false,
        })
      }
      function enviar(){
        Swal.fire({
          title:'Solicitação enviada!',
          icon:'success',
          iconColor:'yellow',
          background:'#000',
          color:'#fff',
          showConfirmButton: false,
          // html:'<button style="color:#000; background:"yellow"; border-radius:"20px"; border-style:none;>Enviar</button>',
        })
      }
  return (
    <React.Fragment>
       <Head>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</Head>
      <Typography variant="h6" gutterBottom>
       Dados
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}  >
      <Grid container spacing={3}>
      
        <Grid item xs={12} sm={12}>
        
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input" label="Nome" variant="standard" {...register('nome', { required: 'Campo não preenchido!' })} value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }} sx={{width:'100%'}}/>
      </Box>
        {/* sx={{minWidth: 220, my:1}}*/} 
        </Grid>
        <Grid item xs={12} sm={6}>

       
          <FormControl variant="standard" 
         sx={{  width:'99%', m:1 }}
        // sx={{ my: { xs: 1, md: 6 }, p: { xs: 1, md: 3 } }}
        >
        <InputLabel id="demo-simple-select-standard-label">Time</InputLabel>
        <Select
         
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard" {...register('time', { required: 'Campo não preenchido!' })}  value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
         
        > 
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={'Materiais'}>MATERIAIS</MenuItem>
          <MenuItem value={'AE'}>AE</MenuItem>
          <MenuItem value={'SGI'}>SGI</MenuItem>
          <MenuItem value={'Tech'}>TECH</MenuItem>
          <MenuItem value={'Logística'}>LOGÍSTICA</MenuItem>
          <MenuItem value={'Qualidade'}>QUALIDADE</MenuItem>
          <MenuItem value={'Preparação'}>PREPARAÇÃO</MenuItem>
          <MenuItem value={'Triagem'}>TRIAGEM</MenuItem>
          <MenuItem value={'Sales'}>SALES</MenuItem>
          <MenuItem value={'SDR'}>SDR</MenuItem>
          <MenuItem value={'People'}>PEOPLE</MenuItem>
          <MenuItem value={'Marketing'}>MARKETING</MenuItem>
          <MenuItem value={'Financeiro'}>FINANCEIRO</MenuItem>
          <MenuItem value={'Compras'}>COMPRAS</MenuItem>
        </Select>
      </FormControl>
      
      

       
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl variant="standard" sx={{ m:1, minWidth:'99%' }}>
        <InputLabel id="demo-simple-select-standard-label">Período:</InputLabel>
        <Select
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          {...register('periodo', { required: 'Campo não preenchido!' })}value={periodo}
          onChange={(e) => {
            setPeriodo(e.target.value);
          }}
        >
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={'Dia de Semana'}>Dia de Semana</MenuItem>
          <MenuItem value={'Sábado / Feriado'}>Sábado / Feriado</MenuItem>
         
        </Select>
        
      </FormControl>
      </Grid>
       
      <Grid item xs={12} sm={6}>
        <TextField
        required
        id="date"
        label="Data:"
        type="date"
        {...register('data', { required: 'Campo não preenchido!' })}value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
        sx={{  width:'99%', m:1 }}
        // sx={{  minWidth:220, mr:2, ml:2,  my:1 }}
        // sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        
      <TextField
      required
        id="time"
        label="Horas solicitadas:"
        type="time"
        {...register('hora', { required: 'Campo não preenchido!' })}value={hora}
            onChange={(e) => {
              setHora(e.target.value);
            }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{  width:'99%', m:1 }}
        // sx={{  minWidth:220, mr:2, ml:2,  my:1 }}
       
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          id="standard-multiline-flexible"
          label="Justificativa"
          multiline
          maxRows={4}
          variant="standard"
          {...register('justificativa', { required: 'Campo não preenchido!' })} value={justificativa}
            onChange={(e) => {
              setJustificativa(e.target.value);
            }}
          sx={{  width:'99%', m:1 }}
          // sx={{  minWidth:220, mr:2, ml:2,  my:1 }}
          // sx={{ ml:0,my:2,mr:2, minWidth: 220 }}
        />
         </Grid>
        <Grid item xs={12} sm={6}>
      <TextField id="email" label="Autorizado por:" variant="standard" {...register('autorizado', { required: 'Campo não preenchido!' })}  placeholder="Email"   value={email}
            onChange={(e) => {
              setEmail(e.target.value);}}
     sx={{  width:'99%', m:1 }} />
      </Grid>
      <Grid container spacing={1}item xs={12} >
      {/* <Button variant="contained"
                sx={{ mt: 3, ml: 6 }}
                type="submit"
                startIcon={<TaskAltRoundedIcon />}>
                Sheets
              </Button> */}

      <Button  sx={{ mt: 3, ml: 6 , bgcolor:"black",color:"yellow"}} type="reset" startIcon={<SyncRoundedIcon />}>
                  Resetar
                </Button>
                
                <Fab variant="extended" color="primary" aria-label="add"
                onClick={handleOnSubmit}
                sx={{ mt: 3, ml: 6, bgcolor:"yellow",color:"black"}}
                type="submit">
              <ForwardToInboxRoundedIcon  sx={{ mr: 1 }} />
                    Enviar
                </Fab>
                {/* <Button
                variant="contained"
                onClick={handleOnSubmit}
                sx={{ mt: 3, ml: 6 }}
                startIcon={<TaskAltRoundedIcon />}
              >
                Confirmar
              </Button> */}
              <Fab variant="extended" color="primary" aria-label="add"
                sx={{ mt: 3, ml: 6, bgcolor:"yellow",color:"black" }}
                type="submit">
              <TaskAltRoundedIcon  sx={{ mr: 1 }} />
                    Confirmar
                </Fab>
                </Grid>
          </Grid>
      </form>
      
    </React.Fragment>
  );
}