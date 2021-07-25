import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { nav, nav__list, nav__item, nav__link, nav__button } from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ next, previous }) => {
  return (
    <div className={nav}>
      <ul className={nav__list}>
        <li className={nav__item}>
          <Link className={nav__link} to={`/people?page=${previous}`}>
            <button disabled={!previous} className={nav__button}>
              Previous
            </button>
          </Link>
        </li>
        <li className={nav__item}>
          <Link className={nav__link} to={`/people?page=${next}`}>
            <button disabled={!next} className={nav__button}>
              Next
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

PeopleNavigation.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
};

export default PeopleNavigation;
