import React from "react";
import PropTypes from "prop-types";
import styles from "./UILoader.module.css";

const { loader, loader__line } = styles;

const UILoader = ({ classes, theme = "red" }) => {
  return (
    <div className={`${loader} ${styles[theme]} ${classes}`}>
      <div className={loader__line}>
        <div></div>
      </div>
    </div>
  );
};

UILoader.propTypes = {
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UILoader;
