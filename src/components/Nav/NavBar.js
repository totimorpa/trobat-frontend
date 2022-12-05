import AppBar from "@mui/material/AppBar";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Person2, ScreenSearchDesktop } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../services/message.service";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const { user, isAuthenticated } = useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  if (isAuthenticated) {
    postUser(user);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    console.log(event);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                height: 64,
              }}
              alt="logo."
              src="/images/logo.png"
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="buscador" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/buscador"
                  >
                    Buscar🔎
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="reportar" onClick={handleCloseNavMenu}>
                <Typography href="/reportar" textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/reportar"
                  >
                    Reportar🗣
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="notificacio" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/notificacio"
                  >
                    Notificar-me 📩
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ScreenSearchDesktop
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Trobat.cat
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/buscador"
            >
              <Button
                key="buscar"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Buscar🔎
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/reportar"
            >
              <Button
                key="reportar"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Reportar🗣
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/notificacio"
            >
              <Button
                key="notificacio"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Notificar-me 📩
              </Button>
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!isAuthenticated && (
              <LoginButton sx={{ my: 2, color: "white", display: "block" }} />
            )}
            {isAuthenticated && (
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.picture} />
              </IconButton>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem sx={{ m: 0, p: 0 }}>
                <Button>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/profile"
                  >
                    Perfil <Person2 sx={{ m: 1 }} />
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem sx={{ m: 0, p: 0 }}>
                <LogoutButton></LogoutButton>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
