import React from "react";
import { THEMES, useTheme } from "../../../context/theme";
import { wrapper, button, light, def, dark, span, image } from "./ChooseSide.module.css";

import darkImg from "./img/dark.jpg";
import defaultImg from "./img/default.jpg";
import lightImg from "./img/light.jpg";

const ChooseSide = () => {
  const { change: changeTheme } = useTheme();

  const buttons = [
    { label: "Light Side", img: lightImg, theme: THEMES.LIGHT, className: light },
    { label: "Neutral", img: defaultImg, theme: THEMES.DEFAULT, className: def },
    { label: "Dark Side", img: darkImg, theme: THEMES.DARK, className: dark },
  ];

  return (
    <div className={wrapper}>
      {buttons.map(({ className, theme, img, label }) => (
        <button key={label} className={`${button} ${className}`} onClick={() => changeTheme(theme)}>
          <img className={image} src={img} alt={label} />
          <span className={span}>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ChooseSide;
