import React from "react";
import { Link } from "react-router-dom";
import navbarLinkItem from "../../data/navbarLinkItem";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function FooterLink() {
  return (
    <Box>
      <Typography
        sx={{
          marginBottom: "12px",
          fontSize: "20px",
          fontWeight: 500,
          letterSpacing: "1px",
        }}
      >
        Link
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: " column",
          gap: "8px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {navbarLinkItem.map((navigation, index) => {
          return (
            <Link to={navigation.to} key={index} className="footer-link">
              {navigation.link}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
