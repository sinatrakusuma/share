import { Box, styled, Typography } from "@mui/material";
import React from "react";
import ContentCustom from "./ContentCustom";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
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
        margin: "5rem 0",
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
        Layanan kami
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#7D7D7D",
            textAlign: "center",
          }}
        >
          Berikut merupakan layanan yang ada di Dausagi
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
        <ContentCustom
        Image="url(./6.jpg)"/>
        {/* <div
        style={{
          width:"280px",
          height:"150px",
          border:"1px solid red",
          borderRadius:"55px"
        }}></div> */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#3B3c45",
              my: 2,
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
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#7D7D7D",
                textAlign: "center",
              }}
            >
              Kamu hanya perlu memberitahu lokasi penjemputan sampah. Tim kami
              akan mengambil sampah ditempatmu.
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
        <ContentCustom
        Image="url(./6.jpg)"/>
        {/* <div
        style={{
          width:"280px",
          height:"150px",
          border:"1px solid red",
          borderRadius:"55px"
        }}></div> */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#3B3c45",
              my: 2,
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
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#7D7D7D",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Kamu hanya perlu memberitahu lokasi penjemputan sampah. Tim kami
              akan mengambil sampah ditempatmu.
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
        <ContentCustom
        Image="url(./6.jpg)"/>
        {/* <div
        style={{
          width:"280px",
          height:"150px",
          border:"1px solid red",
          borderRadius:"55px"
        }}></div> */}
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#3B3c45",
              my: 2,
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
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#7D7D7D",
                textAlign: "center",
              }}
            >
              Metode pembayaran transfer dapat memberikan kemudahan bagimu dalam
              penerimaan pembayaran.
            </Typography>
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;
