import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import styles from "./UIVideo.module.css";
const { video } = styles;

const UIVideo = ({ classes, src, playbackRate = 1, loop = true, muted = true, autoPlay = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video ref={videoRef} className={`${video} ${classes}`} loop={loop} autoPlay={autoPlay} muted={muted}>
      <source src={src} />
    </video>
  );
};

UIVideo.propTypes = {
  src: PropTypes.string,
  playbackRate: PropTypes.number,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

export default UIVideo;
