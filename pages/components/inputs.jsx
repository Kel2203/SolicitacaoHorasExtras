import * as React from 'react'
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel, Box, Fab } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded'
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded'

export default function Inputs () {
  return (
    <>
      <form>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={12}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1.7 }} />
              <TextField
               variant="standard"
                color="primary"
                id="input"
                label="Nome"
                required
                sx={{ width: '95%' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              sx={{ width: '95%', m: 1 }}
            >
              <InputLabel id="demo-simple-select-standard-label" sx={{ ml: -1.7 }}>
              Equipe:
              </InputLabel>
              <Select
               variant="standard"
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
              >
                <MenuItem value=""></MenuItem>
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
            <FormControl sx={{ m: 1, minWidth: '95%' }} placeholder='teste' variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                Período:
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={'Dia de Semana'}>Dia de Semana</MenuItem>
                <MenuItem value={'Sábado / Feriado'}>Sábado / Feriado</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
           variant="standard"
              required
              id="date"
              label="Data:"
              type="date"
              sx={{ width: '95%', m: 1 }}
              // sx={{  minWidth:220, mr:2, ml:2,  my:1 }}
              // sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             variant="standard"
              required
              id="time"
              label="Horas solicitadas:"
              type="time"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
              sx={{ width: '95%', m: 1 }}
              // sx={{  minWidth:220, mr:2, ml:2,  my:1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             variant="standard"
              id="standard-multiline-flexible"
              label="Justificativa"
              multiline
              maxRows={4}
              required
              sx={{ width: '95%', m: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            variant="standard"
              id="email"
              label="Autorizado por:"
              required
              placeholder="Email"
              sx={{ width: '95%', m: 1 }}
            />
          </Grid>

          {/* <Button variant="contained"
                sx={{ mt: 3, ml: 6 }}
                type="submit"
                startIcon={<TaskAltRoundedIcon />}>
                Sheets
              </Button> */}
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', ml: { xs: '0%', sm: '16%', md: '20%', lg: '22%', xl: '20%' }, mt: { xs: '10%', sm: '10%', md: '8%', lg: '5%', xl: '5%' } }}
          >
            <Fab
              variant="extended"
              color="secondary"
              aria-label="add"
              sx={{ ml: { xs: 4, sm: 4, md: 8, lg: 10, xl: 15 }, width: '100%' }}
              type="submit"
            >
              <ForwardToInboxRoundedIcon sx={{ mr: 1 }} />
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
            <Fab
              variant="extended"
              color="secondary"
              aria-label="add"
              sx={{ ml: { xs: 4, sm: 4, md: 8, lg: 10, xl: 15 }, width: '100%' }}
              type="submit"
            >
              <TaskAltRoundedIcon sx={{ mr: 1 }} />
              Confirmar
            </Fab>
          </Box>
        </Grid>
      </form>
    </>
  )
}
