import PropTypes from 'prop-types';
import React from 'react';
import { SelectOption } from '../../enuns';
import { SelectProps } from '../../interfaces';
import './styles.css';



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
Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
export default Select;
