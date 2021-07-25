export const getParamValue = (query, value) => {
  if (!query) {
    return;
  }
  const params = query.split("?");

  return params.find((item) => item.includes(value)).split("=")[1];
};
