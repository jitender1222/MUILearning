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
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import "./mobileStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobOpen, setMobOpen] = useState(false);

  const handleDrawer = () => {
    setMobOpen(!mobOpen);
  };

  const drawer = (
    <>
      <Typography color={"goldenrod"} variant="h4" sx={{ textAlign: "center" }}>
        <FastfoodIcon />
        Logo
      </Typography>
      <Divider />
      <ul className="mob-Style">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography color={"goldenrod"} variant="h4" sx={{ flexGrow: 1 }}>
              <IconButton
                color="inherit"
                edge="start"
                sx={{ display: { sm: "none" } }}
                onClick={handleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <FastfoodIcon />
              Logo
            </Typography>
            <Box sx={{ display: { mr: 2, xs: "none", sm: "block" } }}>
              <ul className="headerStyle">
                <li>
                  <Link to={"/"}>Home</Link>
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
            open={mobOpen}
            onClose={handleDrawer}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: "200px",
                boxSizing: "border-box",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
