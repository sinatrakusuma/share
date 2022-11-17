import { Button, styled } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

const CustomButton = ({
  backgroundColor,
  color,
  textButton,
  generalBtn,
  specialBtn,
  moreBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (generalBtn || moreBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (generalBtn || moreBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: specialBtn && theme.spacing(3),
      width: specialBtn && "90%",
    },
  }));

  return <CustomButton>{textButton}</CustomButton>;
};

CustomButton.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    generalBtn:PropTypes.bool.isRequired,
    specialBtn:PropTypes.bool.isRequired,
    moreBtn:PropTypes.bool.isRequired
  };
  
export default CustomButton;