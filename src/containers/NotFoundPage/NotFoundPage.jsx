import React from "react";

import img from "./img/not-found.png";

import { not, not__title, not__subtitle, not__img } from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={not}>
      <h1 className={not__title}>404</h1>
      <p className={not__subtitle}>
        You Lost your own way <br /> my son
      </p>
      <img className={not__img} src={img} alt="Not found" />
    </section>
  );
};

export default NotFoundPage;
