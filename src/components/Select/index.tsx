import React from "react";

import "./styles.css";
import { SelectOption } from "../../enuns";
import { SelectProps } from "../../interfaces";

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  const { SelectText } = SelectOption;
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled selected hidden>
          {SelectText}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
