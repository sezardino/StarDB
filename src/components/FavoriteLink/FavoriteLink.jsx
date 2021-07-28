import React from "react";
import { NavLink } from "react-router-dom";

import favoriteLogo from "@/static/favorite.svg";

import styles from "./FavoriteLink.module.css";
import { useSelector } from "react-redux";

const { favorite, active, favorite__logo, favorite__count } = styles;

const FavoriteLink = () => {
  const favoriteCount = useSelector((state) => state.favorites.list.length);

  return (
    <NavLink activeClassName={active} exact className={favorite} to="/favorites">
      <img className={favorite__logo} src={favoriteLogo} alt="Favorites" />
      <span className="hidden">Favorites</span>
      {!favoriteCount ? "" : <span className={favorite__count}>{favoriteCount}</span>}
    </NavLink>
  );
};

export default FavoriteLink;
