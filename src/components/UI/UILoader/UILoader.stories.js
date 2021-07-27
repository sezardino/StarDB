import UILoader from "./UILoader";

export default {
  title: "UI-Kit/UILoader",
  component: UILoader,
};

const defaultProps = {
  classes: "",
};

const Template = (args) => <UILoader {...args} />;

export const Dark = Template.bind({});
export const White = Template.bind({});
export const Blue = Template.bind({});
export const Violet = Template.bind({});
export const Red = Template.bind({});
export const Yellow = Template.bind({});

Dark.args = {
  ...defaultProps,
  theme: "dark",
};

White.args = {
  ...defaultProps,
  theme: "white",
};

Blue.args = {
  ...defaultProps,
  theme: "blue",
};

Violet.args = {
  ...defaultProps,
  theme: "violet",
};

Red.args = {
  ...defaultProps,
  theme: "red",
};

Yellow.args = {
  ...defaultProps,
  theme: "yellow",
};
