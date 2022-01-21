import React from 'react';
import { Box, Typography } from '@mui/material';
import CarouselSlider from './CarouselSlider/CarouselSlider';
import ScrollBox from './ScrollBox/ScrollBox';
import Footer from '../Footer/Footer';

const RightFeed = () => {
    return (
        <>

            <Box position='fixed' sx={{
                width: {
                    md: '81%',
                    xs: '100%'
                },
                top: {
                    xs: '45px',
                    md: '78px'
                },
                display: 'flex', justifyContent: 'flext-start', alignItems: 'center', boxShadow: '0px 0px 3px 0px gray', overFlow: 'hidden', zIndex: 99, backgroundColor: '#fff', flexGrow: 1
            }}>
                <Box
                    sx={{
                        width: '33.33%',
                        borderRight: '1px solid #b7b3b3',
                        pr: 5,
                        py: 2,
                        cursor: 'pointer',
                    }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        transition: 'transform 1s',
                        '&:hover': { transform: 'translateX(20px)' }
                    }}>
                        Fresh
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '33.33%',
                        borderRight: '1px solid #b7b3b3',
                        pr: 5,
                        py: 2,
                        cursor: 'pointer',
                    }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        transition: 'transform 1s',
                        '&:hover': { transform: 'translateX(20px)' }
                    }}>
                        Regular
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '33.33%',
                        pr: 5,
                        py: 2,
                        cursor: 'pointer',
                    }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        transition: 'transform 1s',
                        '&:hover': { transform: 'translateX(20px)' }
                    }}>
                        Preloader
                    </Typography>
                </Box>
            </Box>

            {/* Main Body */}
            <Box sx={{
                width: {
                    xs: '100%',
                    md: '97%'
                }, m: {
                    xs: '34px 0px 34px 5px',
                    md: '58px auto'
                }
            }}>
                <CarouselSlider />
                <ScrollBox />
            </Box>

            {/* Footer */}
            <Footer />

        </>
    );
};

export default RightFeed;