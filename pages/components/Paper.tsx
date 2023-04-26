import * as React from 'react';
import { Paper as MaterialUIPaper, PaperProps } from '@mui/material';
import styled from '@emotion/styled';
import estilo from './estilo.module.sass'

export default function Paper(props: PaperProps) {
    const { children, sx, ...other } = props;
    return (


        <MaterialUIPaper
        elevation={0}
       
        // xs: 0,
        // sm: 600,
        // md: 960,
        // lg: 1280,
        // xl: 1920,

        sx={{
            opacity: 0.75,
            mt: { xs:'0%', sm: '5%', md: '5%', lg: '5%', 'xl': '3%'},
            ml: { xs:'10%', sm: '10%', md: '12%', lg: '15%', 'xl': '25%'},
            p: 2,
            width: { xs:'80%', sm: '80%', md: '75%', lg: '65%', 'xl': '50%'},
            height: { xs:'90%', sm: '65%', md: '75%', lg: '65%', 'xl': '65%'},
            borderRadius: 2 / 2,
            ...sx,

        }}
        {...other}
        >
        {children}
        </MaterialUIPaper>
       
    );
    }
