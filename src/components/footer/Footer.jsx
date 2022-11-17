import { styled, Typography } from "@mui/material";
import { Box, Container} from "@mui/system";
import React from "react";

import fbIcon from "../../media/fbicon.png";
import twitterIcon from "../../media/twittericon.png";
import linkedinIcon from "../../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const Link = styled("span")(() => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    mb: "200px",
    "&:hover": {
      color: "#000",
    },
  }));

  const DeskLink = styled("p")(() => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    width:"350px"
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              DAUSAGI
            </Typography>

            <DeskLink>DAUSAGI merupakan Platform Bank sampah digital untuk membantu dan memudahkan masyarakat dalam pengelolaan sampah.</DeskLink>
            <DeskLink>Jl. Soerkarno Hatta, No.12</DeskLink>
            <DeskLink>Jam 08.00 - 17.00</DeskLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Link
            </Typography>
            <Link>Beranda</Link>
            <br />
            <Link>Bank Sampah</Link>
            <br />
            <Link>Daur Ulang</Link>
            <br />
            <Link>Layanan</Link>
            <br />
            <Link>Tentang Kami</Link>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Temukan Kami
            </Typography>


            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
