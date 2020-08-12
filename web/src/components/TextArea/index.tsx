import PropTypes from 'prop-types';
import React from 'react';
import { TextAreaProps } from '../../interfaces';
import './styles.css';



const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default TextArea;
