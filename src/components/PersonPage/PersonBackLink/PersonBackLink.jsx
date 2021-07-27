import React from "react";
import { useHistory } from "react-router";
import { link, link__img, link__label } from "./PersonBackLink.module.css";
import logo from "@/static/back.svg";

const PersonBackLink = () => {
  const history = useHistory();

  const clickHandler = (evt) => {
    evt.preventDefault();

    history.goBack();
  };

  return (
    <button className={link} onClick={clickHandler}>
      <img src={logo} alt="Go Back" className={link__img} />
      <span className={link__label}>Go Back</span>
    </button>
  );
};

export default PersonBackLink;
