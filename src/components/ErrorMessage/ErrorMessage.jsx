import style from "./ErrorMessage.module.css";

const { error } = style;

const ErrorMessage = () => {
  return (
    <p className={error}>
      The dark side of the force has won.
      <br />
      We cannot display data.
      <br />
      Come back when we fix everything
    </p>
  );
};

export default ErrorMessage;
