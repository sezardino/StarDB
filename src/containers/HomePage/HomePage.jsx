import React from "react";
import { useTheme } from "@/context/theme";

import styles from "./HomePage.module.css";
import ChooseSide from "@/components/HomePage/ChooseSide";
const { page, page__wrapper, page__button } = styles;

const HomePage = () => {
  const { change: changeTheme } = useTheme();
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
