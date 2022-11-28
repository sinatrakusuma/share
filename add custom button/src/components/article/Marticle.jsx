import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Marticle = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "600px",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "5rem",
        height: "40vh",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "85vw",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "460px",
              height: "306px",
              backgroundImage: "url(./9.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          ></div>

          <div
            style={{
              width: "636px",
              height: "306px",
              display: "flex",
              alignCenter: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid blue",
                  height: "120px",
                  widht: "630px",
                  margin: "10px",
                  borderRadius: "15px",
                  display: "flex",
                  alignCenter: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <div>
                  <Typography variant="h3" sx={{ fontSize: "25px", fontWeight: "bold", color: "#2E582C", my: 1 }}>
                    Sampah Yang Bisa di daur ulang
                  </Typography>

                  <CustomBox>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#5A6473",
                      }}
                    >
                      Sampah yang bisa didaur ulang artinya sampah yang bisa digunakan kembali atau setelah diubah menjadi bentuk lain. Material yang bisa didaur ulang terdiri dari sampah kaca, plastik, kertas, logam, tekstil, dan
                      lain-lain.
                    </Typography>
                  </CustomBox>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid blue",
                  height: "120px",
                  widht: "630px",
                  margin: "10px",
                  borderRadius: "15px",
                  display: "flex",
                  alignCenter: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <div>
                  <Typography variant="h3" sx={{ fontSize: "25px", fontWeight: "bold", color: "#2E582C", my: 1 }}>
                    Sampah yang tidak bisa didaur ulang
                  </Typography>

                  <CustomBox>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#5A6473",
                      }}
                    >
                      Sampah yang tidak bisa didaur ulang artinya sampah yang tidak bisa digunakan kembali dan tidak bisa diolah menjadi bentuk lain. tisu, popok bekas, styrofoam, cermin, bola lampu, keramik rusak, sampah elektronik dan
                      lain-lain.
                    </Typography>
                  </CustomBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Marticle;
