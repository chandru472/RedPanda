import { Typography, Box, Button, ImageListItem } from '@mui/material';
import mainlogo from './logo-rp.png';

const Main = () => {


    return (
        <Box sx={{ display: { sm: "flex" } }}>

            <Box data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" sx={{ width: { xs: "100%", sm: "50%" }, display: { xs: 'flex', sm: 'none' }, justifyContent: "center" }}>
                <ImageListItem sx={{ width: "480px", height: "450px", mt: "-30px", display: { xs: 'block', sm: 'none' } }}>
                    <img src={mainlogo} alt='main' />
                </ImageListItem>
            </Box>

            <Box sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ ml: { xs: 0, sm: 4, md: 10 }, textAlign: { xs: "center", sm: "start" }, width: "100%" }}>
                    <Typography sx={{ fontWeight: "550", fontFamily: "serif", fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, px: { xs: 1, sm: 0 } }}>
                        Book your <span style={{ color: "#FF6B6B" }}>Flights / Hotels / Bus</span> at Lowest Fares
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "start" } }}>
                        <Button variant="contained"
                            sx={{
                                backgroundColor: "#FF6B6B",
                                '&:hover': {
                                    backgroundColor: "#FF6B6B",
                                },
                                textTransform: 'capitalize',
                                px: 3,
                                py: 1,
                                my: 2,
                                borderRadius: "50px",
                                fontSize: { sm: "0.9rem", md: "1rem" }
                            }}>Book Now</Button>
                    </Box>
                </Box>
            </Box>

            <Box data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center" }}>
                <ImageListItem sx={{ width: "480px", height: "450px", mt: { md: "-20px" }, display: { xs: 'none', sm: 'block' } }}>
                    <img src={mainlogo} alt='main' />
                </ImageListItem>
            </Box>


        </Box>
    );
}

export default Main;
