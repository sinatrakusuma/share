import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Splash = () => {
    return (
    <Box style={{
        display: "flex",
        alignItems: "center",
        height:"80vh",
        marginTop:"50px",
        flexDirection:"column",
        justifyContent:"center",
    }}>
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
    sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 7 }}
  >
    Fitur-Fitur
  </Typography>
        <div
        style={{
            height:"250px",
            width: "1152px",
            display:"flex",
            alignItems:"center",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}
        >
        <div 
        style={{
            width: "576px",
            height: "270px",
            backgroundImage: "url(https://images.unsplash.com/photo-1632911265975-5141fefbd298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}></div>
        <div 
        style={{
            width: "576px",
            height: "270px",
            backgroundImage: "url(https://images.unsplash.com/photo-1661783608378-a1e93dc34025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}></div>
        </div>
        
    </Box>
  )
}

export default Splash