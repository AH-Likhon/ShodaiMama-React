import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import FreshCard from '../FreshCard/FreshCard';
import RegularCard from '../RegularCard/RegularCard';
import PreloaderCard from '../PreloaderCard/PreloaderCard';
import ShodaiMama from '../ShodaiMama/ShodaiMama';
import WhyShodaiMama from '../WhyShodaiMama/WhyShodaiMama';

const ScrollBox = () => {
    return (
        <>
            <PreloaderCard />
            <FreshCard />
            <RegularCard />
            <ShodaiMama />
            <WhyShodaiMama />
        </>
    );
};

export default ScrollBox;