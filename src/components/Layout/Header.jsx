import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleClick} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 1 }}
      >
        <FastfoodIcon />
        Saling Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            {/* Show the heading and logo only when the drawer is closed */}
            {!mobileOpen && (
              <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <FastfoodIcon />
                Saling Restaurant
              </Typography>
            )}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleClick}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  );
};

export default Header;
