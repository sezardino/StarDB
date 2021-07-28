import React from "react";
import PropTypes from "prop-types";

import img from "./img/cancel.svg";

import styles from "./UIInput.module.css";
const { wrapper, input, button, hidden, image } = styles;

const UIInput = ({ value, handler, placeholder, classes }) => {
  const inputHandler = (evt) => {
    handler(evt.target.value);
  };

  const clearHandler = () => handler("");

  return (
    <div className={`${wrapper} ${classes}`}>
      <input className={input} value={value} type="text" placeholder={placeholder} onInput={inputHandler} />
      {value && (
        <button className={button} onClick={clearHandler}>
          <img className={image} src={img} alt="Cancel" />
          <span className={hidden}>Cancel</span>
        </button>
      )}
    </div>
  );
};

UIInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handler: PropTypes.func,
  classes: PropTypes.string,
};

export default UIInput;
