import React from "react";
import PropTypes from "prop-types";
import styles from "./UIFavorite.module.css";

const UIFavorite = ({ color = "white", classes, handler }) => {
  const clickHandler = (evt) => {
    if (handler) {
      evt.preventDefault();
      handler();
    }
  };

  return (
    <button className={`${styles.favorite} ${styles[color]} ${classes}`} onClick={clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path d="M429.998 431.996c-11.046 0-20 8.954-20 20 0 5.576-1.889 10.268-5.615 13.947-3.91 3.861-9.583 6.098-15.132 6.054-5.475-.07-9.919-1.935-13.587-5.705L270.333 358.048a20 20 0 00-28.666 0L136.335 466.292c-3.641 3.742-8.118 5.608-13.686 5.706-5.61.115-11.257-2.12-15.14-5.936-3.655-3.591-5.508-8.206-5.508-13.718V79.999c0-22.056 17.944-40 40-40h227.997c22.056 0 40 17.944 40 40v272.997c0 11.046 8.954 20 20 20s20-8.954 20-20V79.999C449.997 35.888 414.11 0 369.998 0H142.001C97.889 0 62.002 35.888 62.002 79.999v372.345c0 16.174 6.206 31.179 17.474 42.25C90.77 505.69 106.32 512 122.288 512c.355 0 .711-.003 1.066-.009 16.191-.285 30.592-6.441 41.648-17.804L256 400.673l90.998 93.514c11.136 11.444 25.572 17.601 41.747 17.806 16.236.167 32.215-6.204 43.742-17.588 11.292-11.149 17.51-26.211 17.51-42.409.001-11.046-8.953-20-19.999-20z"></path>
      </svg>
    </button>
  );
};

UIFavorite.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.string,
  handler: PropTypes.func,
};

export default UIFavorite;
