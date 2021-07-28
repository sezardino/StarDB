const changeCssProperties = (theme) => {
  const themeToLower = theme.toLowerCase();
  const root = document.querySelector(":root");

  const properties = ["title", "bg"];

  properties.forEach((property) => {
    root.style.setProperty(`--theme-${property}`, `var(--theme-${themeToLower}-${property})`);
    console.log(`--theme-${property}`, `--theme-${themeToLower}-${property}`);
  });
};

export { changeCssProperties };
