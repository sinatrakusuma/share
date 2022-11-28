import { Box, styled } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

const ContentCustom = ({
  Image
}) => {
  const ContentCustom = styled(Box)(() => ({
    width:"280px",
    height:"150px",
    borderRadius:"55px",
    backgroundImage:Image,
    backgroundSize:"cover"
    }
  ));

  return <ContentCustom></ContentCustom>;
};

ContentCustom.propTypes = {
    Image: PropTypes.string.isRequired,
  };
  
export default ContentCustom;