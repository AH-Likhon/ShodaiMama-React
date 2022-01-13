import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import pineapple from '../../../images/pineapple.webp';
import fastDelivery from '../../../images/fast-delivery.86065e4e.png';
import download from '../../../images/download.png';
import download1 from '../../../images/download-1.png';
import banana from '../../../images/banana.webp';
import gourd from '../../../images/calabash.png';
import brinjal from '../../../images/brinjal.webp';
import tomato from '../../../images/tomato.webp';
import pumpkin from '../../../images/pumpkin.webp';
import roast from '../../../images/roast.jpg';
import cock from '../../../images/cock.webp';

const freshData = [
    { title: 'Pineapple Medium', quantity: 'each', price: '45', img: pineapple },
    { title: 'Banana Green', quantity: '4 pcs', price: '32', img: banana },
    { title: 'Gourd', quantity: 'each', price: '65', img: gourd },
    { title: 'Round Brinjal', quantity: '500 gm', price: '32', img: brinjal },
    { title: 'Red Tomato', quantity: '500 gm', price: '19', img: tomato },
    { title: 'Sweet Pumpkin', quantity: 'each(3kg+)', price: '70', img: pumpkin },
    { title: 'Roast Chicken', quantity: '250 gm', price: '130', img: roast },
    { title: 'Cock Chicken Skin Off', quantity: '500 gm', price: '230', img: cock },
]

const FreshCard = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                freshData.map(data => <Grid item sx={{ mt: 0 }} xs={6} sm={6} md={3}>
                    <Card sx={{ maxWidth: 250, boxShadow: '0px 1px 4px 1px rgba(105,96,96,0.56)', cursor: 'pointer' }}>

                        <Button sx={{
                            backgroundColor: '#44BD32',
                            textTransform: 'capitalize',
                            mt: 1,
                            mr: 1,
                            float: 'right',
                            zIndex: 1,
                            '&:hover': { backgroundColor: '#44BD32' }
                        }} variant="contained" size="small">Fresh</Button>

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

export default FreshCard;