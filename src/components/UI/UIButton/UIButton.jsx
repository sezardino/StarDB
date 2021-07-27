import React from "react";
import PropTypes from "prop-types";
import styles from "./UIButton.module.css";
import "../index.css";

const UIButton = ({ disabled, handler, label, theme = "dark" }) => {
  const clickHandler = (evt) => {
    if (handler) {
      evt.preventDefault();
      handler();
    }
  };
  return (
    <button disabled={disabled} className={`${styles.button} ${styles[theme]}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

UIButton.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  label: PropTypes.string,
  handler: PropTypes.func,
};

export default UIButton;
