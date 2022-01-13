import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import miniket from '../../../images/minicket.jpg';
import fastDelivery from '../../../images/fast-delivery.86065e4e.png';
import download from '../../../images/download.png';
import download1 from '../../../images/download-1.png';
import egg from '../../../images/eggs.jpg';
import noodles from '../../../images/noddles.jpg';
import oil from '../../../images/soyabean.jpg';
import oats from '../../../images/oats.jpg';
import jar from '../../../images/jar.webp';
import horlicks from '../../../images/horlicks.jpg';
import spread from '../../../images/spread.jpg';

const freshData = [
    { title: 'Miniket Rice Premium', quantity: '5 kg', price: '350', img: miniket },
    { title: 'Chicken Eggs (Layer)', quantity: '12 pcs', price: '115', img: egg },
    { title: 'Deshi Instant Noodles', quantity: '8 pack', price: '134', img: noodles },
    { title: 'Rupchanda Soyabean Oil', quantity: '5 ltr', price: '760', img: oil },
    { title: 'Quaker Oats Poly', quantity: '450 gm', price: '265', img: oats },
    { title: 'Instant Coffee Jar', quantity: '100 gm', price: '449', img: jar },
    { title: 'Horlicks Drink Jar', quantity: '500 gm', price: '350', img: horlicks },
    { title: 'Nutella Cocoa Spread', quantity: '350 gm', price: '520', img: spread },
]

const RegularCard = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                freshData.map(data => <Grid item sx={{ mt: 0 }} xs={6} sm={6} md={3}>
                    <Card sx={{ maxWidth: 250, boxShadow: '0px 1px 4px 1px rgba(105,96,96,0.56)', cursor: 'pointer' }}>

                        <Button sx={{
                            backgroundColor: '#0097F5',
                            textTransform: 'capitalize',
                            mt: 1,
                            mr: 1,
                            float: 'right',
                            zIndex: 1,
                            '&:hover': { backgroundColor: '#0097F5' }
                        }} variant="contained" size="small">Regular</Button>

                        <CardMedia
                            component="img"
                            sx={{
                                ml: 8,
                                width: '50%',
                                cursor: 'pointer',
                                zIndex: 0,
                                transition: 'transform 1s linear',
                                border: 'none',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}
                            image={data.img}
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography sx={{ fontWeight: 'bold' }} variant="p" component="div">
                                {data.title}
                            </Typography>

                            <Typography sx={{ color: 'red' }} variant="subtitle2" component="div">
                                {data.quantity}
                            </Typography>

                            <Typography sx={{ color: '#605e58' }} variant="subtitle2" component="div">
                                ৳ <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.price}</span>
                            </Typography>

                            <Button
                                sx={{
                                    color: '#006A4E',
                                    borderColor: '#006A4E',
                                    textTransform: 'capitalize',
                                    p: '0px 10px',
                                    mt: 3,
                                    borderRadius: '0px',
                                    '&:hover': {
                                        color: '#006A4E',
                                        borderColor: '#006A4E',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                                variant="outlined"
                                size="small"
                            >
                                Details
                            </Button>


                            <Box sx={{ my: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flext-start' }}>
                                    <CardMedia
                                        component="img"
                                        image={fastDelivery}
                                        sx={{ width: '18%', }}
                                    />
                                    <Typography sx={{ color: 'gray', fontSize: '12px', ml: 1 }} variant="body2">Next Morning</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <CardMedia
                                        component="img"
                                        image={download}
                                        sx={{ width: '40%', mr: 1 }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={download1}
                                        sx={{ width: '40%', }}
                                    />
                                </Box>
                            </Box>
                        </CardContent>

                        <Button
                            sx={{
                                width: '100%',
                                textTransform: 'capitalize',
                                backgroundColor: '#006A4E',
                                transition: 'transform 1s',
                                py: '8px',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    backgroundColor: '#006A4E',
                                }
                            }}
                            variant="contained"
                        >
                            Add To Cart
                        </Button>
                    </Card>
                </Grid>)
            }
        </Grid>
    );
};

export default RegularCard;