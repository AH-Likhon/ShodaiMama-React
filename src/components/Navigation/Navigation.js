import * as React from 'react';
import { AppBar, Avatar, Box, Button, Container, Divider, IconButton, Link, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/rsz_logo.png';
import cart from '../../images/cart.png';
import leftArrow from '../../images/leftarrowec08e6e9.png';
import MenuIcon from '@mui/icons-material/Menu';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (

        <AppBar position="fixed" sx={{ backgroundColor: '#fff', border: 'none', color: 'white', overFlow: 'hidden', zIndex: 9999 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="img"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex', cursor: ' pointer', '&:hover': { backgroundColor: 'transparent' } } }}
                    >
                        <img src={logo} alt="logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, color: '#006a4e', display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, cursor: ' pointer', '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <img src={logo} alt="logo" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: ' flex', alignItems: ' center', justifyContent: 'space-between' }}>
                        <Link sx={{ color: '#006a4e', display: { xs: ' none', md: 'block' } }} href="#" underline="none">
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                    fontWeight: '600',
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
                                        sx={{ width: '500px', mt: '17px', backgroundColor: 'white' }}
                                        id="outlined-size-small"
                                        placeholder="Search for products"
                                        size="small"
                                    />
                                </Fade>
                            )}
                        </Popper>

                        <Link sx={{ color: '#006a4e', display: { xs: ' none', md: 'block' } }} href="#" underline="none">

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


                        <Link sx={{ display: { xs: ' none', md: 'block' } }} href="#" underline="none">
                            <img sx={{ color: '#006a4e', width: '50px', }} src={cart} alt="" />
                        </Link>


                        <Link sx={{ marginRight: '-15px', marginTop: '7px', zIndex: '999', display: { xs: ' none', md: 'block' } }} href="#" underline="none">
                            <img sx={{ color: '#006a4e', }} src={leftArrow} alt="" />
                        </Link>

                        <Box sx={{ backgroundColor: '#006a4e', marginLeft: '0px', marginRight: '-24px', height: '100%', width: '160px', padding: '11px 0px 11px 0px', cursor: 'pointer', display: { xs: ' none', md: 'block' } }}>
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
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;