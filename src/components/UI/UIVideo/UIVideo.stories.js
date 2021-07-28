import UIVideo from "./UIVideo";
import video from "./video/video.mp4";

export default {
  title: "UI-Kit/UIVideo",
  component: UIVideo,
};

const defaultProps = {
  src: video,
  classes: "",
  playbackRate: 1,
  loop: true,
  muted: true,
  autoPlay: true,
};

const Template = (args) => <UIVideo {...args} />;

export const Video = Template.bind({});

Video.args = {
  ...defaultProps,
};
