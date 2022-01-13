import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';
import CarouselSlider from './CarouselSlider/CarouselSlider';

const RightFeed = () => {
    return (
        <>
            <Box sx={{ w: 1, display: 'flex', justifyContent: 'flext-start', alignItems: 'center', boxShadow: '0px 0px 3px 0px gray', flexGrow: 1 }}>
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

            {/* Carousal Slider start */}
            <Box sx={{ width: '97%', m: '1px auto' }}>
                <CarouselSlider />
            </Box>

        </>
    );
};

export default RightFeed;