import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import "../App.css";

function Input({ value, onChange, className, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
