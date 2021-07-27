import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { nav, nav__list, nav__item, nav__link, nav__button } from "./PeopleNavigation.module.css";
import UIButton from "@/components/UI/UIButton";

const PeopleNavigation = ({ next, previous }) => {
  return (
    <div className={nav}>
      <ul className={nav__list}>
        <li className={nav__item}>
          <Link className={nav__link} to={`/people?page=${previous}`}>
            <UIButton disabled={!previous} label="Previous" />
          </Link>
        </li>
        <li className={nav__item}>
          <Link className={nav__link} to={`/people?page=${next}`}>
            <UIButton disabled={!next} theme="white" label="Next" />
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
