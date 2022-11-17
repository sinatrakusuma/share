import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
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
        Layanan kami
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
         Berikut merupakan layanan yang ada di Dausagi
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Bank Sampah
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF", textAlign:"center" }}
            >
              Kamu hanya perlu memberitahu lokasi penjemputan sampah. Tim kami akan mengambil sampah ditempatmu.
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Pick Up Sampah
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF", alignItems: "center",textAlign: "center" }}
            >
              Kamu hanya perlu memberitahu lokasi penjemputan sampah. Tim kami akan mengambil sampah ditempatmu.  
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Transfer
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF", textAlign: "center" }}
            >
              Metode pembayaran transfer dapat memberikan kemudahan bagimu dalam penerimaan pembayaran.
            </Typography>
          </Box>
        </GuideBox>
      </GuidesBox>

    </Box>
  );
};

export default Guide;
