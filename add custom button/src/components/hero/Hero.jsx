import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "36px",
    width: "100%",
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
        <Box
          sx={{
            flex: "1",
            padding: {
              xs: "32px 24px",
              md: "32px 40px",
            },
          }}
        >
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
          <Title variant="h1"
          sx={{color:"#2E582C"}}>Kelola Sampahmu Bersama Kami.</Title>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
          >
            Jadikan lingkunganmu menjadi tempat paling nyaman dan bebas dari
            sampah. Kami siap membantu mengelola sampah disekitarmu!
          </Typography>
          <CustomButton
          backgroundColor='#2E582C'
          color='#ffffff'
          textButton=' Kontak Kami'
          moreBtn={true}
          />
        </Box>

        <Box sx={{ justifySelf: "flex-end" }}>
          <img
            src={process.env.PUBLIC_URL + "./hero.jpg"}
            alt="heroImg"
            style={{ maxWidth: "90%", marginBottom: "2rem", marginTop: "4rem" }}
          />
        </Box>
      </CustomBox>
    </Container>
  );
};

export default Hero;
