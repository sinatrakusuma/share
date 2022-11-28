import React from "react";
import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";
import { FaMapMarkerAlt } from "react-icons/fa";
import FooterLink from "../footerLink/footerLink";
import NavbarBrand from "../navbarBrand/navbarBrand";
import SocialMediaFooter from "../socialMediaFooter/socialMediaFooter";
import "./footer.scss";

export default function Footer() {
  const TextWithIcon = styled("div")(() => ({
    fontFamily: "manrope",
    fontWeight: "300",
    fontSize: "14px",
    color: "#E7E7E7",
  }));

  const FooterTextLink = styled("p")(() => ({
    fontWeight: 300,
    fontSize: "14px",
  }));

  return (
    <Container
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#172D15",
        color: "#FFFFFF",
        padding: {
          xs: "32px 24px",
          md: "32px 40px",
        },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <NavbarBrand />
        <FooterTextLink
          sx={{
            fontFamily: "manrope",
            fontWeight: "300",
            fontSize: "14px",
            color: "#E7E7E7",
          }}
        >
          DAUSAGI merupakan Platform Bank sampah digital untuk membantu dan
          memudahkan masyarakat dalam pengelolaan sampah.
        </FooterTextLink>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jl. Soerkarno Hatta, No.12</FooterTextLink>
        </TextWithIcon>
        <TextWithIcon
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaMapMarkerAlt />
          <FooterTextLink>Jam 08.00 - 17.00</FooterTextLink>
        </TextWithIcon>
      </Box>
      <FooterLink />
      <SocialMediaFooter />
    </Container>
  );
}
