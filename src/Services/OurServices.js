import React from 'react'
import { useEffect } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material'
import LuggageIcon from '@mui/icons-material/Luggage';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TrainIcon from '@mui/icons-material/Train';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurServices = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <Box id='services' sx={{ mt: 12 }}>

            <Box data-aos="zoom-in-up">
                <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 }, color: "#FF6B6B", textAlign: "center", letterSpacing: 2 }}>
                    Our Services
                </Typography>
            </Box>


            <Box sx={{ mt: { xs: 4, sm: 6, md: 8 }, mx: { xs: 1, sm: 2, md: 4 } }}>
                <Grid container spacing={4} justifyContent={'center'}>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#FEF9EC', px: { xs: 2.5, sm: 3 }, py: 3, borderRadius: '24px', border: '1px solid #F7DE97' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#F2C444', p: 2, '&:hover': {
                                    backgroundColor: "#F2C444",
                                },

                            }}>
                                <LuggageIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                Tour Packages
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#E8FCF5', px: 3, py: 3, borderRadius: '24px', border: '1px solid #81ECC8' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#1BDE9C', p: 2, '&:hover': {
                                    backgroundColor: "#1BDE9C",
                                },

                            }}>
                                <ContactEmergencyIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                VISA Booking
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#FFF0F0', px: { xs: 2.5, sm: 3 }, py: 3, borderRadius: '24px', border: '1px solid #FFADAD' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#FF6B6B', p: 2, '&:hover': {
                                    backgroundColor: "#FF6B6B",
                                },

                            }}>
                                <AirplaneTicketIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                Flight Booking
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#F4EFFC', px: 3, py: 3, borderRadius: '24px', border: '1px solid #C1A9ED' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#8F63DF', p: 2, '&:hover': {
                                    backgroundColor: "#8F63DF",
                                },

                            }}>
                                <BeachAccessIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                Hotel Booking
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#F0F6FF', px: 3, py: 3, borderRadius: '24px', border: '1px solid #ACCDFF' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#6AA5FF', p: 2, '&:hover': {
                                    backgroundColor: "#6AA5FF",
                                },

                            }}>
                                <TrainIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                Train Booking
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={5} md={3.5}>
                        <Box data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, backgroundColor: '#FBF0F4', px: { xs: 2.5, sm: 3 }, py: 3, borderRadius: '24px', border: '1px solid #EAACC5' }}>
                            <IconButton disableTouchRipple sx={{
                                backgroundColor: '#D96A98', p: 2, '&:hover': {
                                    backgroundColor: "#D96A98",
                                },

                            }}>
                                <AirportShuttleIcon sx={{ width: 36, height: 36, color: 'white' }} />
                            </IconButton>
                            <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, fontWeight: '600', fontFamily: 'sans-serif' }}>
                                Bus Booking
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default OurServices;
