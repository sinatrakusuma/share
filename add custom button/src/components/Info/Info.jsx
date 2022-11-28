import React from "react";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LoopIcon from "@mui/icons-material/Loop";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";

const Info = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
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
        marginTop: "5rem",
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
        Fitur-Fitur
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          Berikut merupakan Merupakan fitur-fitur yang tersedia di website kami
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: "2px solid #000000",
                width: "25rem",
                height: "90px",
                marginRight: "10px",
                margin: "10px",
                borderRadius: "100px",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #000000",
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceIcon />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5A6473",
                    textAlign: "left",
                  }}
                >
                  Terdapat fitur untuk pengelolaan bank sampah
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: "2px solid #000000",
                width: "25rem",
                height: "90px",
                marginRight: "10px",
                margin: "10px",
                borderRadius: "100px",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #000000",
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LoopIcon />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5A6473",
                    textAlign: "center",
                  }}
                >
                  Terdapat fitur untuk daur ulang sampah anda
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: "2px solid #000000",
                width: "25rem",
                height: "90px",
                marginRight: "10px",
                margin: "10px",
                borderRadius: "100px",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #000000",
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DesignServicesIcon />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5A6473",
                    textAlign: "center",
                  }}
                >
                  Terdapat beberapa layanan yang kami fasilitasi
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: "2px solid #000000",
                width: "25rem",
                height: "90px",
                marginRight: "10px",
                margin: "10px",
                borderRadius: "100px",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #000000",
                  height: "40px",
                  width: "40px",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InfoIcon />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5A6473",
                    textAlign: "center",
                  }}
                >
                  Terdapat fitur yang menjelaskan tentang kami
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Info;
