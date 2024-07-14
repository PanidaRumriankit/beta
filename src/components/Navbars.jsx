import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";


const navLinks = [
  { name: "Problems", link: "/Problemspage", current: false },
  { name: "FAQ", link: "/FAQ", current: false },
  { name: "Contacts", link: "/Contacts", current: false },
];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleNavLinkClick = (link) => {
    setCurrentPath(link);
    navigate(link);
    handleCloseNavMenu();
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavLinkClick(item.link)}
                sx={{
                  color: currentPath === item.link ? 'white' : 'inherit',
                  textTransform: 'none',
                  backgroundColor: currentPath === item.link ? '#1a202c' : 'transparent',
                  '&:hover': {
                    backgroundColor: currentPath === item.link ? '#1a202c' : '#303f9f',
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
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
                  onClick={() => handleNavLinkClick(item.link)}
                  sx={{
                    color: currentPath === item.link ? 'white' : 'inherit',
                    textTransform: 'none',
                    backgroundColor: currentPath === item.link ? '#1a202c' : 'transparent',
                    '&:hover': {
                      backgroundColor: currentPath === item.link ? '#1a202c' : '#303f9f',
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;