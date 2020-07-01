import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
