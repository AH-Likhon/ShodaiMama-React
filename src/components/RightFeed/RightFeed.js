import React from 'react';
import { Box, Typography } from '@mui/material';
import CarouselSlider from './CarouselSlider/CarouselSlider';
import ScrollBox from './ScrollBox/ScrollBox';
import Footer from '../Footer/Footer';

const RightFeed = () => {
    return (
        <>

            <Box position='fixed' sx={{ width: '81%', display: 'flex', justifyContent: 'flext-start', alignItems: 'center', boxShadow: '0px 0px 3px 0px gray', overFlow: 'hidden', zIndex: 99, backgroundColor: '#fff', flexGrow: 1 }}>
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

            {/* Main Body start */}
            <Box sx={{ width: '97%', m: '57px auto' }}>
                <CarouselSlider />
                <ScrollBox />
            </Box>

            <Footer />

        </>
    );
};

export default RightFeed;