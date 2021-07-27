import React from "react";
import PropTypes from "prop-types";
import {
  person,
  person__title,
  person__img,
  person__info,
  person__films,
  person__field,
  person__container,
  person__fields,
  person__label,
  person__data,
} from "./PersonInfo.module.css";

const PersonInfo = ({ personData }) => {
  return (
    <>
      {personData && (
        <section className={person}>
          <h1 className={person__title}>{personData.name}</h1>
          <div className={person__container}>
            <img className={person__img} src={personData.image} alt={personData.name} />
            <div className={person__info}>
              <ul className={person__fields}>
                {personData.fields.map((field) => (
                  <li key={field.label} className={person__field}>
                    <span className={person__label}>{field.label}:</span>
                    <span className={person__data}>{field.data}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className={person__films}></ul>
          </div>
        </section>
      )}
    </>
  );
};

PersonInfo.propTypes = {
  text: PropTypes.string,
};

export default PersonInfo;
