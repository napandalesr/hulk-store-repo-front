import { Button } from 'antd';
import React from 'react';
import PropTypes from "prop-types";

const CustomButton = ({htmlType, type, text, className}) => {
  return <Button
  htmlType={htmlType}
  type={type}
  className={className}>
    {text}
  </Button>;
};

CustomButton.propTypes = {
  htmlType: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  
};

export default CustomButton;