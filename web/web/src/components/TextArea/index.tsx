import React from "react";

import "./styles.css";

import { TextAreaProps } from "../../interfaces";
const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};
export default TextArea;
