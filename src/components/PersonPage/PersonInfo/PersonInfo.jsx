import React from "react";
import PropTypes from "prop-types";
import { list, item, label, data, wrapper } from "./PersonInfo.module.css";

const PersonInfo = ({ fields }) => {
  return (
    <div className={wrapper}>
      <ul className={list}>
        {fields.map((field) => (
          <li key={field.label} className={item}>
            <span className={label}>{field.label}:</span>
            <span className={data}>{field.data}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  fields: PropTypes.array,
};

export default PersonInfo;
