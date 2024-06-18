import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import india from '../Travel/Assets/india.jpg';
import bhutan from '../Travel/Assets/bhutan.jpg';
import cambodia from '../Travel/Assets/cambodia.jpg';
import dubai from '../Travel/Assets/dubai.jpg';
import indonesia from '../Travel/Assets/indonasia.jpg';
import malaysia from '../Travel/Assets/malaysia.jpg';
import nepal from '../Travel/Assets/nepal.jpg';
import singapore from '../Travel/Assets/singapore.jpg';
import srilanka from '../Travel/Assets/srilanka.jpg';
import thailand from '../Travel/Assets/thailand.jpg';
import vietnam from '../Travel/Assets/vietnam.jpg';

//FOR DEPLOYEMENT

const countries = [
    { name: 'India', image: india },
    { name: 'Bhutan', image: bhutan },
    { name: 'Cambodia', image: cambodia },
    { name: 'Dubai', image: dubai },
    { name: 'Indonesia', image: indonesia },
    { name: 'Malaysia', image: malaysia },
    { name: 'Nepal', image: nepal },
    { name: 'Singapore', image: singapore },
    { name: 'Sri Lanka', image: srilanka },
    { name: 'Thailand', image: thailand },
    { name: 'Vietnam', image: vietnam }
];

const Travel = () => {
    const theme = useTheme();

    return (
        <Box sx={{ mt: 8, backgroundColor: '#FFE7E7', py: 4 }}>
            <Box>
                <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 }, color: "#FF6B6B", textAlign: "center", letterSpacing: 3 }}>
                    Top Travelling Countries
                </Typography>
            </Box>

            <Box sx={{ mt: { xs: 4, sm: 6, md: 8 }, mx: { xs: 0, sm: 0, md: 8 } }}>
                <Grid container justifyContent={'center'} spacing={4}>
                    {countries.map((country, index) => (
                        <Grid item key={index} xs={5.5} sm={5} md={3}>
                            <Box sx={{
                                p: { xs: 1, sm: 1.5 }, 
                                backgroundColor: '#FFEEEE', 
                                borderRadius: '16px', 
                                boxShadow: 3, 
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                                <Box
                                    component='img'
                                    src={country.image}
                                    alt={country.name}
                                    sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
                                />
                                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif', textAlign: 'center' }}>
                                    {country.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Travel;
