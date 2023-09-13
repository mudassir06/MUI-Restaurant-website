import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <a
            href="https://www.facebook.com/mms.balti"
                         style={{ color: "inherit", textDecoration: "none" }}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/muda7r_mehdi06/"
                         style={{ color: "inherit", textDecoration: "none" }}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.instagram.com/muda7r_mehdi06/"
                         style={{ color: "inherit", textDecoration: "none" }}
          >
            <YouTubeIcon />
          </a>
        </Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            "@media(max-width:600px)": {
              fontSize: "0.8rem",
            },
          }}
        >
          All Rights Reserved &copy; Saling Restaurant
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
