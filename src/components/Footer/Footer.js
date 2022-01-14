import React from 'react';
import { Box, Button, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import logo from '../../images/rsz_logo.png';
import footerImage from '../../images/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png';

const Footer = () => {
    return (
        <Box sx={{ width: '100%', p: 5, backgroundColor: '#F6F6F6' }}>

            <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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


                <Grid item sx={{ mt: 2, textAlign: 'left', }} xs={2} sm={4} md={3}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                        Useful Links
                    </Typography>

                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        About ShodaiMama
                    </Typography>

                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        FAQ
                    </Typography>
                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Contact Us
                    </Typography>
                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Career
                    </Typography>
                </Grid>


                <Grid item sx={{ mt: 2, textAlign: 'left', }} xs={2} sm={4} md={3}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                        Helpful Links
                    </Typography>

                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Why Choose ShodaiMama
                    </Typography>
                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Privacy policy
                    </Typography>
                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Terms & Condition
                    </Typography>
                    <Typography sx={{ color: 'gray', mt: 1, fontSize: '14px', cursor: 'pointer' }} variant="body1">
                        Delivery, Return & Refund
                    </Typography>
                </Grid>


                <Grid item sx={{ mt: 2, textAlign: 'left', }} xs={2} sm={4} md={3}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                        Contact Us
                    </Typography>


                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 1 }}>
                        <LocationOnIcon sx={{ fontSize: '18px', color: '#31846E', cursor: 'pointer', }} />
                        <Typography sx={{ color: 'gray', ml: '5px', fontSize: '14px', cursor: 'pointer' }} variant="body1">
                            House 18, block: k, South Banasree, Dhaka
                        </Typography>

                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 1 }}>
                        <MailOutlineIcon sx={{ fontSize: '18px', color: '#31846E', cursor: 'pointer', }} />
                        <Typography sx={{ color: 'gray', ml: '5px', fontSize: '14px', cursor: 'pointer' }} variant="body1">
                            info@shodaimama.com
                        </Typography>

                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 1 }}>
                        <HeadsetMicIcon sx={{ fontSize: '18px', color: '#31846E', cursor: 'pointer', }} />
                        <Typography sx={{ color: 'gray', ml: '5px', fontSize: '14px', cursor: 'pointer' }} variant="body1">
                            support@shodaimama.com
                        </Typography>
                    </Box>

                    <Button
                        sx={{
                            fontSize: '16px',
                            letterSpacing: '1px',
                            fontWeight: 400,
                            color: '#615e58',
                            border: '1px solid rgb(182, 181, 181)',
                            backgroundColor: 'transparent',
                            textTransform: 'capitalize',
                            py: '5px',
                            my: 2,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: '1px solid rgb(182, 181, 181)',
                            }
                        }}
                        variant="outlined"
                        size="small"
                    >
                        Help : +8801894874999
                    </Button>

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
                    cursor: 'pointer'
                }}
                image={footerImage}
                alt="green iguana"
            />

        </Box>
    );
};

export default Footer;