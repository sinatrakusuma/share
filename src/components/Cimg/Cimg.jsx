import { Box, styled} from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

const Cimg = ({
  width,
  height,
  backgroudImage,
  backgroundSize,
  borderRadius
}) => {
  const Cimg = styled(Box)(() => ({
  width:width,
  height:height,
  backgroundImage:backgroudImage,
  backgroundSize:backgroundSize,
  borderRadius:borderRadius,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center"
  }));
  return <Cimg></Cimg>;
};

Cimg.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    backgroudImage: PropTypes.string.isRequired,
    backgroundSize: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
  };
  
export default Cimg;