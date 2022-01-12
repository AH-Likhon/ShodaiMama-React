import * as React from 'react';
import { AppBar, Box, Button, Divider, IconButton, Link, TextField, Toolbar, Typography } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/rsz_logo.png';
import cart from '../../images/cart.png';
import leftArrow from '../../images/leftarrowec08e6e9.png';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ backgroundColor: '#fff', border: 'none', color: 'white', overFlow: 'hidden', zIndex: 999 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img src={logo} alt="logo" />
                    </IconButton>

                    <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                        {/* <img src={logo} alt="logo" /> */}
                    </Typography>


                    <Link sx={{ color: '#006a4e', }} href="#" underline="none">
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                fontWeight: '600',
                                // fontSize: '15px',
                                '&:hover': { backgroundColor: 'transparent' }
                            }}
                            color="inherit"
                            onClick={handleClick('bottom')}
                        >
                            <SearchIcon sx={{ fontSize: '35px' }} />
                        </Button>
                    </Link>

                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <TextField
                                    sx={{ width: '500px', mt: '15px' }}
                                    id="outlined-size-small"
                                    placeholder="Search for products"
                                    size="small"
                                />
                            </Fade>
                        )}
                    </Popper>

                    <Link sx={{ color: '#006a4e', }} href="#" underline="none">

                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                fontWeight: '600',
                                fontSize: '15px',
                                '&:hover': { backgroundColor: 'transparent' }
                            }}
                            color="inherit">
                            <LocationOnIcon />
                            Select Delivery Location
                        </Button>
                    </Link>

                    <Link sx={{ color: '#006a4e', }} href="#" underline="none">

                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                fontWeight: '600',
                                fontSize: '15px',
                                '&:hover': { backgroundColor: 'transparent' }
                            }}
                            color="inherit">
                            <PersonIcon />
                            Sign In
                        </Button>
                    </Link>


                    <Link sx={{ marginRight: '40px' }} href="#" underline="none">
                        <img sx={{ color: '#006a4e', width: '50px', }} src={cart} alt="" />
                    </Link>


                    <Link sx={{ marginRight: '-15px', marginTop: '7px', zIndex: '999' }} href="#" underline="none">
                        <img sx={{ color: '#006a4e', }} src={leftArrow} alt="" />
                    </Link>

                    <Box sx={{ backgroundColor: '#006a4e', marginLeft: '0px', marginRight: '-24px', height: '100%', width: '160px', padding: '11px 0px 11px 0px', cursor: 'pointer' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img width='26px' src="https://shodaimama.com/static/media/artBoard.cb23ac3c.svg" alt="" />
                            <span style={{ fontWeight: 'bold', fontSize: '14px' }}>0</span>
                        </Box>

                        <Divider sx={{ width: '80%', margin: '5px auto', backgroundColor: '#fcfcfcad' }} />

                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '7px' }}>
                                {'\u09F3'} 0
                            </Typography>
                        </Box>
                    </Box>



                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;