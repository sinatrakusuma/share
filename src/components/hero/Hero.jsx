import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from '@mui/material/Button';
import heroImg from "../../media/tim-mossholder-qq-8dpdlBsY-unsplash.jpg";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "36px",
    width:"600px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
      <Container>      
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Selamat Datang Di Website Dausagi
            </Typography>
            <Title variant="h1">
              Kelola Sampahmu Bersama Kami.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Jadikan lingkunganmu menjadi tempat paling nyaman dan bebas dari sampah.
              Kami siap membantu mengelola sampah disekitarmu!  
            </Typography>
            <Button variant="contained" href="#contained-buttons">Kontak Kami</Button>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "90%", marginBottom: "2rem", marginTop:"4rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
  );
};

export default Hero;
