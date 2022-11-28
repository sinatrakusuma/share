import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Splash = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        margin:"50px 0 80px",
        flexDirection: "column",
        justifyContent: "center",
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

      <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#2E582C", my: 7 }}>
        Hasil- Hasil Olahan Daur Ulang
      </Typography>
      <div
        style={{
          height: "376px",
          width: "1152px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            width: "376px",
            height: "272px",
            backgroundImage: "url(./d.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "376px",
            height: "272px",
            backgroundImage: "url(./e.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "376px",
            height: "270px",
            backgroundImage: "url(./f.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        style={{
          height: "250px",
          width: "1152px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "376px",
            height: "270px",
            backgroundImage: "url(./g.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "376px",
            height: "270px",
            backgroundImage: "url(./h.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "376px",
            height: "270px",
            backgroundImage: "url(./i.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </Box>
  );
};

export default Splash;
