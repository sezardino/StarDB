import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { THEMES, useTheme } from "../../context/theme";

import FavoriteLink from "@/components/FavoriteLink";

import defaultLogo from "./img/defaultLogo.svg";
import lightLogo from "./img/lightLogo.svg";
import darkLogo from "./img/darkLogo.svg";

import styles from "./Header.module.css";

const { header, header__logo, header__nav, header__list, header__item, header__link, active } = styles;

const Header = () => {
  const [logo, setLogo] = useState(defaultLogo);
  const theme = useTheme().theme;

  const changeLogo = (theme) => {
    switch (theme) {
      case THEMES.DARK:
        setLogo(darkLogo);
        break;
      case THEMES.DEFAULT:
        setLogo(defaultLogo);
        break;
      case THEMES.LIGHT:
        setLogo(lightLogo);
        break;
      default:
        setLogo(defaultLogo);
        break;
    }
  };

  useEffect(() => {
    changeLogo(theme);
  }, [theme]);

  return (
    <header className={`${header} container`}>
      <img className={header__logo} src={logo} alt="star wars" />
      <nav className={header__nav}>
        <ul className={header__list}>
          <li className={header__item}>
            <NavLink activeClassName={active} exact className={header__link} to="/">
              Home
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink activeClassName={active} className={header__link} to="/people?page=1">
              People
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink activeClassName={active} className={header__link} to="/search">
              Search
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink activeClassName={active} exact className={header__link} to="/not-found">
              Not Found
            </NavLink>
          </li>
          <li className={header__item}></li>
        </ul>
        <FavoriteLink />
      </nav>
    </header>
  );
};

export default Header;
