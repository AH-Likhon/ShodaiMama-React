import React from 'react';
import { Box, Button, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../../images/rsz_logo.png';
import footerImage from '../../images/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', p: 5, backgroundColor: '#F6F6F6' }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item sx={{ mt: 0, }} xs={2} sm={4} md={3}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img style={{ width: '120px', }} src={logo} alt="logo" />
                    </IconButton>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', m: '10px auto' }}>
                        <FacebookIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <LinkedInIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <InstagramIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <YouTubeIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                    </Box>

                    <Button
                        sx={{
                            width: '100%',
                            fontSize: '16px',
                            letterSpacing: '1px',
                            fontWeight: 400,
                            backgroundColor: '#006A4E',
                            py: '5px',
                            my: 2,
                            '&:hover': {
                                backgroundColor: '#006A4E',
                            }
                        }}
                        variant="contained"
                    >
                        ShodaiMama App
                    </Button>

                    <Typography sx={{ color: 'gray', fontWeight: 100, }} variant="body1">
                        ShodaiMama © 2021
                    </Typography>
                </Grid>

                <Grid item sx={{ mt: 0, }} xs={2} sm={4} md={3}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img style={{ width: '120px', }} src={logo} alt="logo" />
                    </IconButton>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', m: '10px auto' }}>
                        <FacebookIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <LinkedInIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <InstagramIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <YouTubeIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                    </Box>

                    <Button
                        sx={{
                            width: '100%',
                            fontSize: '16px',
                            letterSpacing: '1px',
                            fontWeight: 400,
                            backgroundColor: '#006A4E',
                            py: '5px',
                            my: 2,
                            '&:hover': {
                                backgroundColor: '#006A4E',
                            }
                        }}
                        variant="contained"
                    >
                        ShodaiMama App
                    </Button>

                    <Typography sx={{ color: 'gray', fontWeight: 100, }} variant="body1">
                        ShodaiMama © 2021
                    </Typography>
                </Grid>

                <Grid item sx={{ mt: 0, }} xs={2} sm={4} md={3}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img style={{ width: '120px', }} src={logo} alt="logo" />
                    </IconButton>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', m: '10px auto' }}>
                        <FacebookIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <LinkedInIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <InstagramIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <YouTubeIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                    </Box>

                    <Button
                        sx={{
                            width: '100%',
                            fontSize: '16px',
                            letterSpacing: '1px',
                            fontWeight: 400,
                            backgroundColor: '#006A4E',
                            py: '5px',
                            my: 2,
                            '&:hover': {
                                backgroundColor: '#006A4E',
                            }
                        }}
                        variant="contained"
                    >
                        ShodaiMama App
                    </Button>

                    <Typography sx={{ color: 'gray', fontWeight: 100, }} variant="body1">
                        ShodaiMama © 2021
                    </Typography>
                </Grid>

                <Grid item sx={{ mt: 0, }} xs={2} sm={4} md={3}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img style={{ width: '120px', }} src={logo} alt="logo" />
                    </IconButton>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', m: '10px auto' }}>
                        <FacebookIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <LinkedInIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <InstagramIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                        <YouTubeIcon sx={{ color: '#31846E', cursor: 'pointer', '&:hover': { color: '#FA8B3E' } }} />
                    </Box>

                    <Button
                        sx={{
                            width: '100%',
                            fontSize: '16px',
                            letterSpacing: '1px',
                            fontWeight: 400,
                            backgroundColor: '#006A4E',
                            py: '5px',
                            my: 2,
                            '&:hover': {
                                backgroundColor: '#006A4E',
                            }
                        }}
                        variant="contained"
                    >
                        ShodaiMama App
                    </Button>

                    <Typography sx={{ color: 'gray', fontWeight: 100, }} variant="body1">
                        ShodaiMama © 2021
                    </Typography>
                </Grid>

            </Grid>

            <Divider sx={{ my: 4 }} />

            <CardMedia
                component="img"
                sx={{
                    width: '100%',
                    cursor: 'pointer',
                    zIndex: 0,
                    border: 'none',
                    // my: 1,
                    cursor: 'pointer'
                }}
                image={footerImage}
                alt="green iguana"
            />

        </Box>
    );
};

export default Footer;