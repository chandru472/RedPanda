import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import baby from './Assets/BABY BOX - Organic Food Store.png'
import via from './Assets/VIA - Travel Partner1.jpg'
import ebix from './Assets/EBIX - Money Transfer.png'
import dl from './Assets/DL ARCHITECH - Architecture & Designs.png'
import kreat from './Assets/KREATIONZ - Builders & Interiors.png'
import med from './Assets/MED YODA - Medical Tourism.png'
import prk from './Assets/PRK TRADERS - Industrial supplies.png'
import yk from './Assets/YK DESIGNS - Digital & Graphics.jpg'

const Partners = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Box data-aos="zoom-in-up">
                <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 }, color: "#FF6B6B", textAlign: "center", letterSpacing: 2 }}>
                    Partners
                </Typography>
            </Box>

            <Box sx={{ mt: 8, mx: { xs: 1, sm: 12 } }}>
                <Grid container spacing={3} justifyContent={'center'}>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={via} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={ebix} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={dl} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>



                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={baby} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={kreat} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={med} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={prk} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                    <Grid item>
                        <Box data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" component='img' src={yk} alt='partner' sx={{ height: { xs: '65px', md: '70px' }, width: { xs: '95px', md: '106px' } }} />
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )
}

export default Partners