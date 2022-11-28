import React from 'react'
import { Box, styled,Typography } from "@mui/material";
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
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh",
        marginTop:"50px"
    }}
    >
        <div
        style={{
            width: "1152px",
            height: "364px",
            borderRadius: "20px",
            backgroundPositionY:"-83px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
        }}
        >
           <div
          style={{
            width:"400px",
            height:"300px",
            border:"1px solid red",
            backgroundImage: "url(https://images.unsplash.com/photo-1661783608378-a1e93dc34025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }
        }></div>
           <div
          style={{
            width:"722px",
            height:"300px",
          }
        }>
           <Box>
        <div
        style={{
            display :"flex",
            flexDirection:"column",
            width:"700px",
            justifyContent:"flex-end",
            alignItems:"center",
        }}>


      <CustomBox>
        <div>
      <Typography
        variant="h3"
        sx={{ fontSize: "30px", fontWeight: "bold", color: "#2E582C", my: 1 }}
      >
        Tentang kami
      </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "justify",
            my:2
          }}
        >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, molestiae non eos magnam ipsum pariatur earum mollitia ducimus natus. Odio, quisquam neque aperiam et pariatur voluptatem qui officia! Temporibus cupiditate voluptas fuga impedit quisquam non unde reprehenderit repudiandae quo, ab consectetur, cumque voluptates veniam. Aut dicta voluptate officia quam laudantium pariatur voluptates, iste amet numquam deleniti similique eaque expedita assumenda, quo dolorum maxime dignissimos ratione adipisci. Voluptatum autem, id porro deserunt exercitationem eum impedit cum eligendi quas provident facere placeat!
        </Typography>
        </div>
      </CustomBox>
        </div>
    </Box>
        </div>
            </div>
    </div>
  )
}

export default Desc