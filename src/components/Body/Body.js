import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from '@mui/material';
import { Outlet, } from "react-router-dom";
import home from '../../images/image4.png';
import fresh from '../../images/fresh.png';
import regular from '../../images/regular.png';
import preloader from '../../images/preloader.png';
import hygiene from '../../images/hygiene.3e40b6db.png';
import breakfast from '../../images/breakfast.png';
import cooking from '../../images/Cooking.png';
import meat from '../../images/meat.png';
import fruits from '../../images/Fruits & Vegetables.png';
import dairy from '../../images/dairy.png';
import frozen from '../../images/frozen.png';
import beverages from '../../images/beverages.png';
import kids from '../../images/kids.png';
import personal from '../../images/personal.png';
import kitchen from '../../images/home.png';
import stationary from '../../images/stationary.png';

const drawerWidth = 255;

const leftMenuData = [
    { value: 'Home', img: home },
    { value: 'Fresh', img: fresh },
    { value: 'Regular', img: regular },
    { value: 'Preloader', img: preloader },
    { value: 'Hygiene', img: hygiene },
    { value: 'Breakfast & Snacks', img: breakfast },
    { value: 'Cooking', img: cooking },
    { value: 'Meat & Fish', img: meat },
    { value: 'Fruits & Vegetables', img: fruits },
    { value: 'Dairy', img: dairy },
    { value: 'Frozen & Canned', img: frozen },
    { value: 'Beverages', img: beverages },
    { value: 'Kids care', img: kids },
    { value: 'Personal Care', img: personal },
    { value: 'Home & Kitchen', img: kitchen },
    { value: 'Stationary', img: stationary },
]


function Body(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ marginTop: '20px', marginBottom: '80px' }}>
            <Box sx={{ textAlign: 'left', }}>

                {
                    leftMenuData.slice(0, 4).map(menu => <Button
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#006a4e',
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5px',
                            ml: '30px',
                            transition: 'transform 1s',
                            '&:hover': { backgroundColor: 'transparent', transform: 'translateX(20px)' }
                        }}>
                        <img width="25px" src={menu.img} alt="" />
                        <Typography sx={{ ml: '10px', fontWeight: 'bold' }}>
                            {menu.value}
                        </Typography>
                    </Button>)
                }

                <Box sx={{ backgroundColor: '#ebebeb', width: '100%', ml: '1px', p: '10px', border: '1px solid #8080803d' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 'bold', ml: '30px' }} variant="h6">
                        <span style={{ color: '#808080' }}>Explore</span>
                        <span style={{ color: '#006a4e' }}> Shodai</span><span style={{ color: '#e76103' }}>Mama</span>
                    </Typography>
                </Box>
                {
                    leftMenuData.slice(4, 16).map(menu => <Button
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#006a4e',
                            textTransform: 'capitalize',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5px',
                            ml: '30px',
                            transition: 'transform 1s',
                            '&:hover': { backgroundColor: 'transparent', transform: 'translateX(20px)' }
                        }}>
                        <img width="25px" src={menu.img} alt="" />
                        <Typography sx={{ ml: '10px', fontWeight: 'bold' }}>
                            {menu.value}
                        </Typography>
                    </Button>)
                }


            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { backgroundColor: 'transparent', boxSizing: 'border-box', width: drawerWidth, marginTop: '78px' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, m: 0, mt: '13px', zIndex: 0, maxWidth: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />

            </Box>
        </Box>
    );
};

Body.propTypes = {
    window: PropTypes.func,
};

export default Body;