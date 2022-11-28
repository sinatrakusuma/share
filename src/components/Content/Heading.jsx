import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"5rem",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#2E582C",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#2E582C", my: 3 }}
      >
        Tentang kami
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "justify",
          }}
        >
        Dausagi merupakan sebuah aplikasi berbasis web yang kami rancang, yang memfasilitasi masyarakat untuk melakukan pengelolaan sampah menjadi uang, dimana aplikasi ini sangat berguna dan mudah digunakan. Seiring dengan berkembangnya Teknologi maka kami mencoba berinovasi dan memfasilitasi masyarakat tidak hanyak sekedar menukar sampah, juga kami sediakan cara pengolahan sampah, edukasi jenis sampah, dan beberapa informasi yang berguna yang tentunya berkaitan dengan sampah, sehingga lingkungan bersih dan juga mendapat keuntungan.
        </Typography>
      </CustomBox>


    </Box>
  );
};

export default Guide;
