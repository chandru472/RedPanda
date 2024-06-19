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
            <Box>
                <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 }, color: "#FF6B6B", textAlign: "center", letterSpacing: 2 }}>
                    Partners
                </Typography>
            </Box>

            <Box sx={{mt:8}}>
                <Grid container spacing={3} justifyContent={'center'}>

                    <Grid item>
                        <Box component='img' src={via} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={ebix} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={dl} alt='partner' height={80} width={112} />
                    </Grid>



                    <Grid item>
                        <Box component='img' src={baby} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={kreat} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={med} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={prk} alt='partner' height={80} width={112} />
                    </Grid>

                    <Grid item>
                        <Box component='img' src={yk} alt='partner' height={80} width={112} />
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )
}

export default Partners