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
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, molestiae non eos magnam ipsum pariatur earum mollitia ducimus natus. Odio, quisquam neque aperiam et pariatur voluptatem qui officia! Temporibus cupiditate voluptas fuga impedit quisquam non unde reprehenderit repudiandae quo, ab consectetur, cumque voluptates veniam. Aut dicta voluptate officia quam laudantium pariatur voluptates, iste amet numquam deleniti similique eaque expedita assumenda, quo dolorum maxime dignissimos ratione adipisci. Voluptatum autem, id porro deserunt exercitationem eum impedit cum eligendi quas provident facere placeat!
        </Typography>
      </CustomBox>


    </Box>
  );
};

export default Guide;
