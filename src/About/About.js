import React from 'react';
import { Box, ImageListItem, Typography } from '@mui/material';
import boat from './boat.jpg';

const About = () => {
    return (
        <div id='about'>
            <Box sx={{ mt: { xs: 8, md: 12 } }} >
                <Box data-aos="zoom-in-up">
                    <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 }, color: "#FF6B6B", textAlign: "center", letterSpacing: 2 }}>
                        About Us
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: "block", md: "flex" }, mx: { xs: 2, sm: 4, md: 6 }, gap: 4, alignItems: "center", mt: { xs: 4, sm: 5, md: 8 } }}>
                    <Box data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ImageListItem sx={{ width: { xs: "400px", sm: "533px", md: '634px' }, height: { xs: '300px', sm: '350px', md: '400px' } }}>
                            <Box
                                component="img"
                                src={boat}
                                alt="boated"
                                sx={{
                                    width: '100%',
                                    height: { xs: '300px', sm: '350px', md: '400px' },
                                    objectFit: 'cover',
                                    border: '4px solid #FF6B6B',
                                    borderRadius: '16px'
                                }}
                            />
                        </ImageListItem>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            color="initial"
                            sx={{
                                textAlign: "justify",
                                fontFamily: "sans-serif",
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                letterSpacing: { xs: '1px', sm: '1.5px' },
                                mt: { xs: 4, md: 0 }
                            }}
                        >
                            Red Panda Vacations is a Travel & Tourism information provider to travel lovers. Our comprehensive packages cover Individuals, Honeymoons, Groups, Corporate, Schools, Colleges, VISA processing, Ticketing, Hotel Booking, Forex, and MICE arrangements. All our travel packages are completely client specific with all customization and comfort throughout the trip. We are into continuous learning, research and experiences towards tourism. We are operating with Assistance of Local Team in each & every Destinations Globally. All over Global destinations we have our Local team to Assists. It will make travellers hassle free travel throughout globally.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default About;
