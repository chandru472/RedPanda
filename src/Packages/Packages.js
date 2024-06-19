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

const Packages = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Box data-aos="zoom-in-up">
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
                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={college}
                                alt="college tours"
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
                                    College Tours
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    College Tours
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box  data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={group}
                                alt="group tours"
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
                                    Group Tours
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    Group Tours
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box  data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={honeymoon}
                                alt="honeymoon packages"
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
                                    Honeymoon Packages
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    Honeymoon Packages
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={kerala}
                                alt="kerala tour"
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
                                    Kerala Tour
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    Kerala Tour
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box  data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={dubai}
                                alt="dubai tour"
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
                                    Dubai Tour
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    Dubai Tour
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box  data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            sx={{ px: 2, boxShadow: 3, pt: 2, pb: 4, borderRadius: '16px' }}
                        >
                            <Box
                                component="img"
                                src={thailand}
                                alt="thailand tour"
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
                                    Thailand Tour
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                        fontWeight: '600',
                                        fontFamily: 'sans-serif',
                                        mt: 1,
                                    }}
                                >
                                    Thailand Tour
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Packages;
