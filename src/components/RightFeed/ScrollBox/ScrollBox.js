import React from 'react';
import FreshCard from '../FreshCard/FreshCard';
import RegularCard from '../RegularCard/RegularCard';
import PreloaderCard from '../PreloaderCard/PreloaderCard';
import ShodaiMama from '../ShodaiMama/ShodaiMama';
import WhyShodaiMama from '../WhyShodaiMama/WhyShodaiMama';
import MensCloth from '../MensCloth/MensCloth';

const ScrollBox = () => {
    return (
        <>
            <PreloaderCard />
            <FreshCard />
            <RegularCard />
            <MensCloth />
            <ShodaiMama />
            <WhyShodaiMama />
        </>
    );
};

export default ScrollBox;