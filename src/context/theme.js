import React, { useContext, useState } from "react";
import { changeCssProperties } from "../utils/changeCssProperties";

const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
  DEFAULT: "DEFAULT",
};

const ThemeContext = React.createContext(THEMES.DEFAULT);

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(THEMES.DEFAULT);

  const change = (name) => {
    setTheme(name);
    changeCssProperties(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { THEMES, useTheme };
export default ThemeProvider;
