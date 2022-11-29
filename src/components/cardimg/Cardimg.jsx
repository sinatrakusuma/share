import { Box, styled} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Cardimg = ({backgroundImage}) => {
  const Cardimg = styled(Box)(() => ({
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "24px",
    bottom: "0",
    filter: "brightness(0.75) saturate(1.2) contrast(0.85)",
    left: "0",
    position: "absolute",
    right: "0",
    top: "0",
    transformOrigin: "center",
    transform: "scale(1) translateZ(0)",
    transition: "filter 200ms linear, transform 200ms linear",
  }));
  return <Cardimg className="card__background"></Cardimg>;
};

Cardimg.propTypes = {
  textButton: PropTypes.string.isRequired,
};

export default Cardimg;
