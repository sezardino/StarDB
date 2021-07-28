import React from "react";
import { useSelector } from "react-redux";

import PeopleList from "@/components/PeoplePage/PeopleList";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoritesList = useSelector((state) => state.favorites?.list);

  return (
    <section className="page">
      <h1>Favorites</h1>
      {!!favoritesList && <h2 className={styles.page__title}>No Data</h2>}
      {favoritesList && <PeopleList people={favoritesList} />}
    </section>
  );
};

export default FavoritesPage;
