import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialMediaFooter() {
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
        Temukan Kami
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Link to="/" className="media-icon">
          <FaFacebook size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <FaInstagram size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <FaYoutube size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <FaTelegram size={24} />
        </Link>
        <Link to="/" className="media-icon">
          <FaWhatsapp size={24} />
        </Link>
      </Box>
    </Box>
  );
}
