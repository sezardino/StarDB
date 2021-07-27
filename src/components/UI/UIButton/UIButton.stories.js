import UIButton from "./UIButton";

export default {
  title: "UI-Kit/UiButton",
  component: UIButton,
};

const defaultProps = {
  disabled: false,
  theme: "dark",
  label: "Hello World",
  handler: () => console.log("Click on Button"),
};

const Template = (args) => <UIButton {...args} />;

export const Dark = Template.bind({});
export const White = Template.bind({});
export const Disabled = Template.bind({});

Dark.args = {
  ...defaultProps,
  theme: "dark",
};

White.args = {
  ...defaultProps,
  theme: "white",
};

Disabled.args = {
  ...defaultProps,
  disabled: true,
};
