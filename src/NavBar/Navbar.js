import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { List, ListItem, Divider, ListItemButton, ListItemText, IconButton, Button, Drawer, Typography, ImageListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';
import logo1 from "./logo (1).png";
import { HashLink as Link } from 'react-router-hash-link';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const drawerWidth = 240;

const handleScroll = (el) => {
    const yOffset = -80; // Adjust this value to match the height of your AppBar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

export default function ElevateAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" onClick={handleDrawerToggle}>
            <IconButton sx={{ my: 1, mx: 1 }}>
                <CloseIcon />
            </IconButton>
            <Divider />

            <List>
                <Link smooth to='/#about' scroll={handleScroll} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>About</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link smooth to='/#services' scroll={handleScroll} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>Services</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>

                <ListItem disablePadding sx={{ display: "flex", alignItems: "center" }}>
                    <PlaceIcon sx={{ ml: 1, my: 1.5 }} />
                    <ListItemText>Ekkatuthangal, Chennai</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                    <Button variant='contained'
                        sx={{
                            backgroundColor: "#FF6B6B",
                            '&:hover': {
                                backgroundColor: "#FF6B6B",
                            },
                            textTransform: 'capitalize',
                            textAlign: 'center',
                            mx: 2,
                            my: 1.5,
                            borderRadius: "50px"
                        }}>Call Now</Button>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar component="nav" sx={{ backgroundColor: "white" }}>
                    <Toolbar>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", mx: { sm: 2, md: 6 }, my: { sm: 0.5, md: 1 } }}>
                            <Box sx={{ my: 0.5 }}>
                                <ImageListItem sx={{ width: { xs: 40, sm: 52 }, height: { xs: 40, sm: 52 } }}>
                                    <img src={logo1} alt='logo' />
                                </ImageListItem>
                            </Box>

                            <Box data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Link smooth to='/#about' scroll={handleScroll} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ mx: { sm: 1, md: 2 }, color: "black", fontSize: { sm: "0.9rem", md: "1rem" } }}>About</Typography>
                                    </Link>
                                    <Link smooth to='/#services' scroll={handleScroll} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ mx: { sm: 1, md: 2 }, color: "black", fontSize: { sm: "0.9rem", md: "1rem" } }}>Services</Typography>
                                    </Link>
                                    <Box sx={{ display: "flex", alignItems: "center", mx: { sm: 1, md: 2 }, color: "black" }}>
                                        <PlaceIcon sx={{ ml: 1 }} />
                                        <Typography sx={{ fontSize: { sm: "0.9rem", md: "1rem" } }}>Ekkatuthangal, Chennai</Typography>
                                    </Box>
                                    <Button variant='contained'
                                        sx={{
                                            backgroundColor: "#FF6B6B",
                                            '&:hover': {
                                                backgroundColor: "#FF6B6B",
                                            },
                                            textTransform: { sm: 'capitalize' },
                                            textAlign: 'center',
                                            borderRadius: "50px",
                                            mx: { sm: 1, md: 2 },
                                            fontSize: { sm: "0.9rem", md: "1rem" }
                                        }}>Call Now</Button>
                                </Box>
                            </Box>
                        </Box>

                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, ml: 'auto' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor="right"
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2 }}>
                    {/* Content goes here */}
                </Box>
            </Container>
        </React.Fragment>
    );
}
