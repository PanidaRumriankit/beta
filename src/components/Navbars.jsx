import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { navLinks } from "../constants/index";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ResponsiveAppBar({ page }) {
  React.useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (page === navLinks[i].link) {
        navLinks[i].current = true;
      }
    }
  }, [page]);
  

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1f2937' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
              className="h-8 w-auto cursor-pointer"
              src={logo}
              alt="logo"
              onClick={handleLogoClick}
              width="50px"
            />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {navLinks.map((item) => (
                <Button
                  key={item.name}
                  href={item.link}
                  aria-current={item.current ? "page" : undefined}
                  sx={{
                    color: item.current ? 'white' : 'inherit',
                    textTransform: 'none',
                    backgroundColor: item.current ? '#1a202c' : 'transparent',
                    '&:hover': {
                      backgroundColor: item.current ? '#1a202c' : '#303f9f',
                      color: 'white',
                    },
                    margin: '5px',
                    borderRadius: '5px',
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((item) => (
              <Button
                  key={item.name}
                  href={item.link}
                  aria-current={item.current ? "page" : undefined}
                  sx={{
                    color: item.current ? 'white' : 'inherit',
                    textTransform: 'none',
                    backgroundColor: item.current ? '#1a202c' : 'transparent',
                    '&:hover': {
                      backgroundColor: item.current ? '#1a202c' : '#303f9f',
                      color: 'white',
                    },
                    margin: '5px',
                    borderRadius: '5px',
                  }}
                >
                  {item.name}
                </Button>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;