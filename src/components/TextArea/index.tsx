import React from "react";

import { Wrapper, Label, TextAreaStyled } from "./styles";

import { TextAreaProps } from "../../interfaces";

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <TextAreaStyled id={name} {...rest} />
    </Wrapper>
  );
};
export default TextArea;
