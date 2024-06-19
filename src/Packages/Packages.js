import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import college from './Assets/college-tour.png';
import group from './Assets/group1.jpg';
import honeymoon from './Assets/honeymoon.jpg';
import kerala from './Assets/kerala.jpg';
import dubai from './Assets/dubay.jpg';
import thailand from './Assets/thailand.jpg';

const packagesData = [
    { id: 1, title: 'College Tours', image: college, alt: 'college tours' },
    { id: 2, title: 'Group Tours', image: group, alt: 'group' },
    { id: 3, title: 'Honeymoon Packages', image: honeymoon, alt: 'honeymoon packages' },
    { id: 4, title: 'Kerala Tour', image: kerala, alt: 'kerala' },
    { id: 5, title: 'Dubai Tour', image: dubai, alt: 'dubai' },
    { id: 6, title: 'Thailand Tour', image: thailand, alt: 'thailand' },
];

const Packages = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "550",
                        fontFamily: "serif",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        px: { xs: 1, sm: 0 },
                        color: "#FF6B6B",
                        textAlign: "center",
                        letterSpacing: 3,
                    }}
                >
                    Travel Packages
                </Typography>
            </Box>

            <Box sx={{ mt: 8 }}>
                <Grid container spacing={4} justifyContent="center">
                    {packagesData.map((pkg) => (
                        <Grid item key={pkg.id}>
                            <Box sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}>
                                <Box
                                    component="img"
                                    src={pkg.image}
                                    alt={pkg.alt}
                                    sx={{ height: { xs: "226px", md: "253px" }, width: { xs: '270px', md: '340px' }, borderRadius: '16px' }}
                                />
                                <Box
                                    sx={{
                                        backgroundColor: '#FF6B6B',
                                        position: 'absolute',
                                        color: 'white',
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '24px',
                                        mt: '-28px',
                                        ml: { xs: '145px', md: '212px' },
                                    }}
                                >
                                    <StarIcon sx={{ height: 20, width: 20 }} />
                                    <StarIcon sx={{ height: 20, width: 20 }} />
                                    <StarIcon sx={{ height: 20, width: 20 }} />
                                    <StarIcon sx={{ height: 20, width: 20 }} />
                                    <StarHalfIcon sx={{ height: 20, width: 20 }} />
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: "550",
                                            fontFamily: "sans-serif",
                                            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                            color: "#FF6B6B",
                                            letterSpacing: 0,
                                            mt: 2,
                                        }}
                                    >
                                        {pkg.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                            fontWeight: '600',
                                            fontFamily: 'sans-serif',
                                            mt: 1,
                                        }}
                                    >
                                        {pkg.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Packages;
