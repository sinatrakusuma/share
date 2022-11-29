import { styled, Typography } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';

const Ctypo = ({
  textButton,
  fontSize,
  fontWeight,
  color,
  my
}) => {
  const Ctypo = styled(Typography)(() => ({
  fontSize:fontSize,
  fontWeight:fontWeight,
  color:color,
  margin:my
  }));
  return <Ctypo>{textButton}</Ctypo>;
};

Ctypo.propTypes = {
    textButton: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    fontWeight: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    my: PropTypes.string,
  };
  
export default Ctypo;