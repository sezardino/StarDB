import UIFavorite from "./UIFavorite";

export default {
  title: "UI-Kit/UIFavorite",
  component: UIFavorite,
};

const defaultProps = {
  classes: "",
  color: "white",
  handler: () => console.log("click"),
};

const Template = (args) => <UIFavorite {...args} />;

export const Dark = Template.bind({});
export const White = Template.bind({});
export const Blue = Template.bind({});
export const Violet = Template.bind({});
export const Red = Template.bind({});
export const Yellow = Template.bind({});

Dark.args = {
  ...defaultProps,
  color: "dark",
};

White.args = {
  ...defaultProps,
  color: "white",
};

Blue.args = {
  ...defaultProps,
  color: "blue",
};

Violet.args = {
  ...defaultProps,
  color: "violet",
};

Red.args = {
  ...defaultProps,
  color: "red",
};

Yellow.args = {
  ...defaultProps,
  color: "yellow",
};
