import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import hassle from '../../../images/hassle.png';
import fresh from '../../../images/freshness-refined.b739103f.png';
import delivery from '../../../images/on-time-door-step-delevary.bbe0d749.png';
import fast from '../../../images/fast-and-flawless-payment.e84934c7.png';
import customer from '../../../images/image3.png';
import money from '../../../images/value-for-money.a1ed3a72.png';
import prompt from '../../../images/uncompromised-dedicated-service.f13021df.png';
import stress from '../../../images/stress-free-refund.b1606821.png';


const shodaiMamaData = [
    { title: 'Hassle Free Grocery Shopping', img: hassle, details: 'Avoid the crowds and long queues to get your daily needs.' },

    { title: 'Freshness Redefined', img: fresh, details: 'Fresh groceries from trusted and hygienic sources to your doorstep.' },

    { title: 'On-Time Doorstep Delivery', img: delivery, details: 'Solution to your needs just on time.' },

    { title: 'Fast & Flawless Payment System', img: fast, details: 'All secured payment gateways to ensure stress free fast payment.' },

    { title: 'Customer Centric Approach', img: customer, details: 'For us, our customer needs comes first. Our Aim is to offer the very Best quality, at the best price and deals.' },

    { title: 'Value For Money', img: money, details: 'Commited to ensure that your hard-earned money are spent wisely. ' },

    { title: 'Prompt Query Resolve', img: prompt, details: 'Not just answering your calls, rather a substantial solution to all your queries.' },

    { title: 'Stress Free Refund/Return Policy', img: stress, details: 'With proper validation your return and refund will be as smooth as your shopping experience with us.' },
]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 5,
    marginTop: 110,
    marginBottom: 40,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#006A4E' : '#308fe8',
    },
}));


const WhyShodaiMama = () => {
    return (
        <>

            <Typography sx={{
                mt: 8, mb: {
                    xs: 1,
                    md: 0
                }, fontWeight: 'bold', float: 'left'
            }} variant="h5">
                Why Shodaimama
            </Typography>

            <BorderLinearProgress sx={{ width: '100%' }} variant="determinate" value={26} />


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    shodaiMamaData.map(data => <Grid item sx={{ mt: 0, }} xs={2} sm={4} md={3}>
                        <Card sx={{ maxWidth: 250, height: '260px', boxShadow: '0px 1px 4px 1px rgba(105,96,96,0.56)', cursor: 'pointer' }}>

                            <CardMedia
                                component="img"
                                sx={{
                                    m: '0 auto',
                                    py: 2,
                                    width: '25%',
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
                                <Typography sx={{ fontWeight: '500', }} variant="p" component="div">
                                    {data.title}
                                </Typography>
                                <Typography sx={{ mt: 2, fontWeight: '400', color: 'gray' }} variant="body2" component="div">
                                    {data.details}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>

        </>
    );
};

export default WhyShodaiMama;