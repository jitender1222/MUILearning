import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "black",
          color: "white",
          padding: 2,
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": { fontSize: "60px", cursor: "pointer", mr: 2 },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </Box>
        <Typography
          variant="h4"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
              padding: "0",
            },
          }}
        >
          All Rights Reserved &copy; Jitender singh
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
