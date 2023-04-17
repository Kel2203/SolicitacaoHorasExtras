import * as React from 'react';
import { Paper as MaterialUIPaper, PaperProps } from '@mui/material';

export default function Paper2(props: PaperProps) {
    const { children, sx, ...other } = props;
    return (
        <MaterialUIPaper
        // xs: 0,
        // sm: 600,
        // md: 960,
        // lg: 1280,
        // xl: 1920,

        sx={{
            opacity: 0.1,
            mt: { xs:'0%', sm: '5%', md: '5%', lg: '5%', 'xl': '1%'},
            ml: { xs:'10%', sm: '10%', md: '12%', lg: '15%', 'xl': '23%'},
            p: 2,
            width: { xs:'80%', sm: '80%', md: '75%', lg: '65%', 'xl': '54%'},
            height: { xs:'90%', sm: '65%', md: '75%', lg: '65%', 'xl': '74%'},
            borderRadius: 3 / 2,
            position: 'absolute',
            boxShadow: '30px 30px 50px #050409',
            ...sx,

        }}
        {...other}
        >
        {children}
        </MaterialUIPaper>
    );
    }