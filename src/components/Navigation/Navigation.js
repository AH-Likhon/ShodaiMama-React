import React from 'react';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/rsz_logo.png';
import cart from '../../images/cart.png';

const Navigation = () => {
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

                    <Link sx={{ color: '#006a4e', }} href="#" underline="none">

                        <img sx={{ color: '#006a4e', width: '50px' }} src={cart} alt="" />
                    </Link>


                    {/* {
                        user?.email ?
                            <Box>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    sx={{ mt: '28px' }}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button onClick={handleClose} color="inherit">{user?.displayName}</Button></Link>
                                    <br />

                                    <Link sx={{ color: 'text.primary' }} href="/" underline="none"><Button onClick={handleClose} color="inherit">Home</Button></Link>
                                    <br />

                                    <Link sx={{ color: 'text.primary' }} href="/dashboard" underline="none"><Button onClick={handleClose} color="inherit">Dashboard</Button></Link>
                                    <br />

                                    <Button onClick={logOut} color="inherit">LogOut</Button>
                                </Menu>
                            </Box>
                            :
                            <Link sx={{ color: 'text.primary' }} href="/login" underline="none"><Button color="inherit">Login</Button></Link>
                    } */}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;