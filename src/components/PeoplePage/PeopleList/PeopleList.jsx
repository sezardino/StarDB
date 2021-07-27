import React from "react";
import PropTypes from "prop-types";
import style from "./PeopleList.module.css";
import { Link } from "react-router-dom";

const { list, list__item, list__link, list__img, list__title } = style;

const PeopleList = ({ people }) => {
  return (
    <ul className={list}>
      {people.map(({ name, id, image }) => (
        <li className={list__item} key={id}>
          <Link className={list__link} to={`/people/${id}`}>
            <img className={list__img} src={image} alt={name} />
            <h3 className={list__title}>{name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
