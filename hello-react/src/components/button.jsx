import React from "react"; // eslint-disable-line no-unused-vars
import "../App.css";
import PropTypes from "prop-types";

function Button({ onClick, children, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
