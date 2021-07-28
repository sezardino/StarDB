import React from "react";

import styles from "./HomePage.module.css";
import ChooseSide from "@/components/HomePage/ChooseSide";
const { page, page__wrapper, page__button } = styles;

const HomePage = () => {
  return (
    <section className={page}>
      <h1>Choose Your Side</h1>
      <div className={page__wrapper}>
        <ChooseSide />
      </div>
    </section>
  );
};

export default HomePage;
