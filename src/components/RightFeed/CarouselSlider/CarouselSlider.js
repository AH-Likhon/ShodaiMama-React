import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';

const CarouselSlider = () => {

    return (

        <Carousel autoPlay infiniteLoop={true} showStatus={false} showThumbs={false} showIndicators={false}>
            <div>
                <img src="https://bucket.shodaimama.com/files/sm/images/T16nh11640530118286U4YYkV.jpeg" />
            </div>
            <div>
                <img src="https://bucket.shodaimama.com/files/sm/images/af8Zsm1639978805128uyhbwD.png" />
            </div>
            <div>
                <img src="https://bucket.shodaimama.com/files/sm/images/lfYjG51639978759343YtI18U.png" />
            </div>
            <div>
                <img src="https://bucket.shodaimama.com/files/sm/images/csvw8b1639978620805J6NYQ3.png" />
            </div>
            <div>
                <img src="https://bucket.shodaimama.com/files/sm/images/rrJQWI163997863637200iQTQ.png" />
            </div>
        </Carousel>
    );
}

export default CarouselSlider;
