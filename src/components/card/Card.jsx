import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./card.scss"

const Card = () => {
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
    marginRight: theme.spacing(3),
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
        OUR DEVELOPERS TEAM
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
         Berikut merupakan Merupakan Anggota Tim Kami
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
        <Cards sx={{maxWidth: 355}}>
      <CardMedia
        component="img"
        height="140"
        image="../../1.png"
        alt="ihsan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ihsan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Cards>
         
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Box>
        </GuideBox>
        <GuideBox>
        <Cards sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="140"
        image="./2.png"
        alt="Sinatra"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sinatra
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Cards>
         
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Box>
        </GuideBox>
        <GuideBox>
        <Cards sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./3.png"
        alt="Ervan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ervan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Cards>
         
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Box>
        </GuideBox>
        <GuideBox>
        <Cards sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./4.png"
        alt="Enzi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Enzi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Cards>
         
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Box>
        </GuideBox>
      </GuidesBox>

    </Box>
  );
};

export default Card;
