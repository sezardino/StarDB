import UIInput from "./UIInput";

export default {
  title: "UI-Kit/UIInput",
  component: UIInput,
};

const defaultProps = {
  value: "",
  placeholder: "Placeholder Text",
  classes: "",
  handler: () => console.log("input"),
};

const Template = (args) => <UIInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  ...defaultProps,
};
