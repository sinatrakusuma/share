import React from "react";
import NavbarBrand from "../navbarBrand/navbarBrand";
import NavbarLink from "../navbarLink/navbarLink";
import { AppBar, Box } from "@mui/material";
import { HiBars3BottomLeft } from "react-icons/hi2";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openHamburgerHandler = () => {
    {
      isOpen === false ? setIsOpen(true) : setIsOpen(false);
    }
  };
  return (
    // <ThemeProvider theme={theme}>
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        padding: {
          xs: "12px 24px",
          md: "12px 40px",
        },
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.05)",
        margin: "0 auto",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavbarBrand />
        <nav className={isOpen ? "navigation active" : "navigation "}>
          <NavbarLink />
        </nav>

        <span
          className={isOpen ? "hamburgerBtn open" : "hamburgerBtn "}
          onClick={openHamburgerHandler}
        >
          <HiBars3BottomLeft />
        </span>
      </Box>
    </AppBar>
    // </ThemeProvider>
  );
};

export default Navbar;
