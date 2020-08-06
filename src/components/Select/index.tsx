import React from "react";

import { Label, SelectStyled, Wrapper } from "./styles";

import { SelectProps } from "../../interfaces";

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <SelectStyled value="" id={name} {...rest}>
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </SelectStyled>
    </Wrapper>
  );
};
export default Select;
