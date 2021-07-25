import React from "react";
import PropTypes from "prop-types";
import style from "./PeopleList.module.css";

const { list, list__item, list__link, list__img, list__title } = style;

const PeopleList = ({ people }) => {
  return (
    <ul className={list}>
      {people.map(({ name, url, id, image }) => (
        <li className={list__item} key={id}>
          <a className={list__link} href={url}>
            <img className={list__img} src={image} alt={name} />
            <h3 className={list__title}>{name}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
