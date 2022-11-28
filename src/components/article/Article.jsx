import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Article = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "5rem",
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            alignItems: "center",
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

          <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#2E582C", my: 3 }}>
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
              Aplikasi ini dibangun pada tahun 2022 dengan tujuan untuk menyelesaikan atau menjawab solusi dari susahnya menumbuhkan kesadaran masyarakat mengenai sampah sehingga bersikap tidak peduli terhadap lingkungan, dimana sampah
              dapat menyebabkan berbagai macam bencana sehingga sangat diperlukan kesadaran masyarakat akan sampah ini.
            </Typography>
          </CustomBox>
        </div>
      </Box>
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            alignItems: "center",
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

          <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#2E582C", my: 3 }}>
            Tentang Aplikasi
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
              Aplikasi ini merupakan sebuah aplikasi berbasis web yang dikembangkan untuk memanagement sampah masyarakat dimana ketika melakukan penyetoran sampah akan memberikan feedback seperti saldo sehingga selain menjadikan masyarakat
              bisa memanagement sampah mereka juga akan mendapat penghasilan dan lingkungan pun terjaga dengan menggunakan aplikasi ini.
            </Typography>
          </CustomBox>
        </div>
      </Box>
    </Box>
  );
};

export default Article;
