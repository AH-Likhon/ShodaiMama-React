import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import shodaiMama from '../../../images/shodaiMama.jpeg';
import arrow from '../../../images/vector.svg';

const PreloaderCard = () => {
    return (

        <>

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
                        Preorder
                    </Typography>
                    <Typography variant="p">
                        বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item sx={{ mt: 0 }} xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 275, boxShadow: '0px 1px 4px 1px rgba(105,96,96,0.56)' }}>

                        <CardMedia
                            component="img"
                            sx={{
                                margin: '0 auto',
                                width: '80%',
                                cursor: 'pointer',
                                zIndex: 0,
                                transition: 'transform 1s linear',
                                border: 'none',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}
                            image={shodaiMama}
                            alt="green iguana"
                        />
                        <CardContent sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifycontent: 'space-between',
                            cursor: 'pointer'
                        }}>
                            <Typography sx={{}} variant="p" component="div">
                                সদাইমামা বার-বি-কিউ ফেস্ট ...
                            </Typography>

                            <CardMedia
                                component="img"
                                image={arrow}
                                sx={{
                                    width: '5%',
                                    ml: 2
                                }}
                            ></CardMedia>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
};

export default PreloaderCard;