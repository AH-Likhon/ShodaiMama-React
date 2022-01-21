import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import breakfast from '../../../images/breakfast.png';
import cooking from '../../../images/Cooking.png';
import meat from '../../../images/meat.png';
import fruits from '../../../images/Fruits & Vegetables.png';
import dairy from '../../../images/dairy.png';
import frozen from '../../../images/frozen.png';
import beverages from '../../../images/beverages.png';
import kids from '../../../images/kids.png';
import personal from '../../../images/personal.png';
import home from '../../../images/home.png';
import stationary from '../../../images/stationary.png';

const shodaiMamaData = [
    { title: 'Breakfast & Snacks', img: breakfast },
    { title: 'Cooking', img: cooking },
    { title: 'Meat & Fish', img: meat },
    { title: 'Fruits & Vegetables', img: fruits },
    { title: 'Dairy', img: dairy },
    { title: 'Frozen & Canned', img: frozen },
    { title: 'Beverages', img: beverages },
    { title: 'Kids Care', img: kids },
    { title: 'Personal Care', img: personal },
    { title: 'Home & Kitchen', img: home },
    { title: 'Stationary', img: stationary },
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


const ShodaiMama = () => {
    return (
        <>

            <Typography sx={{
                mt: 8, mb: {
                    xs: 2,
                    md: 0
                }, fontWeight: 'bold', float: 'left'
            }} variant="h5">
                Shodaimama Categories
            </Typography>

            <BorderLinearProgress sx={{
                width: ' 100%'
            }} variant="determinate" value={26} />


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    shodaiMamaData.map(data => <Grid item sx={{ mt: 0 }} xs={2} sm={4} md={2.4}>
                        <Card sx={{ maxWidth: 220, boxShadow: '0px 1px 4px 1px rgba(105,96,96,0.56)', cursor: 'pointer' }}>

                            <CardMedia
                                component="img"
                                sx={{
                                    m: '0 auto',
                                    py: 2,
                                    width: '40%',
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
                                <Typography sx={{ my: -2, fontWeight: '300', color: 'gray' }} variant="p" component="div">
                                    {data.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
                }
            </Grid>

        </>
    );
};

export default ShodaiMama;