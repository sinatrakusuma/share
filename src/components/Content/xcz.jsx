import{box, Button, styled, Typograpy} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const Content = () => {
    const CustomBox = styled(box)(({theme}) =>({
        width: "30%",
        [theme.breakpoints.down(md)]: {
        width:"85%",
        },
    }));

    const Contents = styled(Box)(({theme}) =>({
        display: "flex",
        justifyContent:"center",
        gap: theme.spacing(5),
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            with: "100%", 
        },
    }));

    const  ContentBox = styled(Box)(({theme}) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(2,0,2,0),
        },
    }));

    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
        
        <div 
        style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
        }}>    
        </div>
        <Typograpy
        variant="h3"
        sx={{
            fontSize: "16px",
            fontWeight:"500",
            color: "#5A6473",
            textAlign: "center",
    }}>
        Layanan kami
    </Typograpy>     
    <CustomBox>
        <Typograpy
        variant="body2"
        sx={{
            fontSize:"16px",
            fontWeight:"500",
            color: "#5A6473",
            textAlign: "center",
        }}
        >
          Berikut merupakan layanan yang ada di Dausagi :  
        </Typograpy>
    </CustomBox>
    <Contents>
        <ContentBox>
            <img src={""} alt="BankSampah"/>
            <Typograpy
             variant="body2"
            sx={{
                fontWeight:"500",
                fontSize:"200px",
                color:"#5A6473",
                my: 1,
            }}>
               Bank Sampah
            </Typograpy>
            <box
            sx={{
                cursor:"pointer",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            >
             <Typograpy
             variant="body2"
             sx={{
                fontWeight:"bold",
                fontSize:"14px",
                color:"#5A6473",}}
            >   
            Di Dausagi kamu bisa menabung sampah dan dapat ditukar dengan benefit yang kami tawarkan.
             Kamu bisa memilih benefit apa yang kamu butuhkan.
             </Typograpy>
            </box>
        </ContentBox>
        <ContentBox>
            <img src={""} alt="BankSampah"/>
            <Typograpy
             variant="body2"
            sx={{
                fontWeight:"500",
                fontSize:"200px",
                color:"#5A6473",
                my: 1,
            }}>
               Bank Sampah
            </Typograpy>
            <box
            sx={{
                cursor:"pointer",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            >
             <Typograpy
             variant="body2"
             sx={{
                fontWeight:"bold",
                fontSize:"14px",
                color:"#5A6473",}}
            >   
            Di Dausagi kamu bisa menabung sampah dan dapat ditukar dengan benefit yang kami tawarkan.
             Kamu bisa memilih benefit apa yang kamu butuhkan.
             </Typograpy>
            </box>
        </ContentBox>
        <ContentBox>
            <img src={""} alt="BankSampah"/>
            <Typograpy
             variant="body2"
            sx={{
                fontWeight:"500",
                fontSize:"200px",
                color:"#5A6473",
                my: 1,
            }}>
               Bank Sampah
            </Typograpy>
            <box
            sx={{
                cursor:"pointer",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            >
             <Typograpy
             variant="body2"
             sx={{
                fontWeight:"bold",
                fontSize:"14px",
                color:"#5A6473",}}
            >   
            Di Dausagi kamu bisa menabung sampah dan dapat ditukar dengan benefit yang kami tawarkan.
             Kamu bisa memilih benefit apa yang kamu butuhkan.
             </Typograpy>
            </box>
        </ContentBox>
    </Contents>            
    );
    <CustomButton
    backgroundColor="#00000"
    color="#ffffff"
    buttonText="SeeMore"
    />
    </Box> 
    );
};

export default Content;