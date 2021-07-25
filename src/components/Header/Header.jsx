import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const { header, header__nav, header__list, header__item, header__link, active } = styles;

const Header = () => {
  return (
    <header className={`${header} container`}>
      <nav className={header__nav}>
        <ul className={header__list}>
          <li className={header__item}>
            <NavLink activeClassName={active} exact className={header__link} to="/">
              Home
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink activeClassName={active} exact className={header__link} to="/people">
              People
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink activeClassName={active} exact className={header__link} to="/not-found">
              Not Found
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
