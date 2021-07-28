let timerID;

const debounce = (handler, time) => {
  if (timerID) {
    clearTimeout(timerID);
  }

  timerID = setTimeout(handler, time);
};

export default debounce;
