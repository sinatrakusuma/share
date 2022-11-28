import React from "react";
import { Box, styled, Typography } from "@mui/material";
const Desc = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "550px",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "1152px",
          height: "364px",
          borderRadius: "20px",
          backgroundPositionY: "-83px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "300px",
            border: "1px solid red",
            backgroundImage: "url(./c.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          style={{
            width: "722px",
            height: "300px",
          }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "700px",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <CustomBox>
                <div>
                  <Typography variant="h3" sx={{ fontSize: "30px", fontWeight: "bold", color: "#2E582C", my: 1 }}>
                    Cara daur ulang sampah botol
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#5A6473",
                      textAlign: "justify",
                      my: 2,
                    }}
                  >
                    Mengelompokkan kaca bekas sebelum didaur ulang, dicuci lalu dihancurkan, supaya bisa diolah menjadi bahan mentah yang disebut cullet. seperti gamping atau batu kapur, pasir, dan soda abu. Campuran ini kemudian dipanaskan
                    pada suhu 1426 derajat Celcius. Akan membuat bahan pembuat kaca meleleh, dicetakan itu cairan itu akan mendingin dan menjadi produk kaca yang baru.
                  </Typography>
                </div>
              </CustomBox>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Desc;
