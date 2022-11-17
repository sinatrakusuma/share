import { Box} from "@mui/material";
// import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Marticle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop:"5rem",
        height:"40vh",
        justifyContent:"space-evenly"
        
      }}
    >
        <div
        style={{
           display:"flex",
           width:"85vw",
           alignItems:"center",
           flexDirection:"row",
           justifyContent:"space-around",
        }}>
        <div
        style={{
            width:"460px",
            height:"306px",
            backgroundImage: "url(https://images.unsplash.com/photo-1661783608378-a1e93dc34025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px"
        }}></div>
        <div
        style={{
            width:"576px",
            height:"306px",
            display:"flex",
            alignCenter:"center",
            justifyContent:"center",
        }}>
        <div>    
        <div
        style={{
            border:"1px solid red",
            height:"135px",
            widht:"235px",
            margin:"10px",
            borderRadius:"15px"
        }}></div>
        <div
        style={{
            border: "1px solid red", 
            height: "135px",
            width: "235px", 
            margin: "10px",
            borderRadius: "15px"
        }}></div>
        </div>
        <div>    
        <div
        style={{
            border:"1px solid red",
            height:"135px",
            widht:"235px",
            margin:"10px",
            borderRadius:"15px"
        }}></div>
        <div
        style={{
            border: "1px solid red", 
            height: "135px",
            width: "235px", 
            margin: "10px",
            borderRadius: "15px"
        }}></div>
        </div>



        </div>
        </div>


    </Box>
  );
};

export default Marticle;
