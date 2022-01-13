import { Box, Typography } from '@mui/material';
import React from 'react';
import FreshCard from '../FreshCard/FreshCard';
import RegularCard from '../RegularCard/RegularCard';
import PreloaderCard from '../PreloaderCard/PreloaderCard';

const ScrollBox = () => {
    return (
        <>

            <Box sx={{ w: 1, py: '15px', backgroundColor: '#F1F1F1', m: '30px 0px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Box sx={{
                    // border: 0px solid #44BD32;
                    borderRadius: '10px',
                    width: '1%',
                    height: '80px',
                    backgroundColor: '#44BD32'
                }}></Box>

                <Box sx={{
                    width: '99%',
                    textAlign: 'left',
                    marginLeft: '15px',
                    // lineHeight: '5px'
                }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        Preorder
                    </Typography>
                    <Typography variant="p">
                        বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।
                    </Typography>
                </Box>
            </Box>

            <PreloaderCard />

            {/* Start Fresh Category Information */}

            <Box sx={{ w: 1, py: '15px', backgroundColor: '#F1F1F1', m: '30px 0px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Box sx={{
                    borderRadius: '10px',
                    width: '1%',
                    height: '80px',
                    backgroundColor: '#44BD32'
                }}></Box>

                <Box sx={{
                    width: '99%',
                    textAlign: 'left',
                    marginLeft: '15px',
                }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        Fresh
                    </Typography>
                    <Typography variant="p">
                        গুনগত মান বজায় রাখার জন্য পচনশীল খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।
                    </Typography>
                </Box>
            </Box>

            <FreshCard />

            {/* End Fresh Category Information */}


            {/* Start Regular Category Information */}

            <Box sx={{ w: 1, py: '15px', backgroundColor: '#F1F1F1', m: '30px 0px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Box sx={{
                    borderRadius: '10px',
                    width: '1%',
                    height: '80px',
                    backgroundColor: '#44BD32'
                }}></Box>

                <Box sx={{
                    width: '99%',
                    textAlign: 'left',
                    marginLeft: '15px',
                }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        Regular
                    </Typography>
                    <Typography variant="p">
                        ২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল ১০টা-রাত ১০টা পর্যন্ত ।
                    </Typography>
                </Box>
            </Box>

            <RegularCard />

            {/* Start Regular Category Information */}


        </>
    );
};

export default ScrollBox;