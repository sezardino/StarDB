import UIVideo from "../UI/UIVideo";
import videoSrc from "./video/video.mp4";

import style from "./ErrorMessage.module.css";

const { error, wrapper, video } = style;

const ErrorMessage = () => {
  return (
    <section className={wrapper}>
      <p className={error}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <UIVideo classes={video} src={videoSrc} />
    </section>
  );
};

export default ErrorMessage;
