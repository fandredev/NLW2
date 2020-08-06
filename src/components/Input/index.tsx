import React from "react";

import { Label, InputStyled, WrapperInput } from "./styles";

import { InputProps } from "../../interfaces";

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <WrapperInput>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled type="text" id={name} {...rest} />
    </WrapperInput>
  );
};
export default Input;
