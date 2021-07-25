import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

const withNetworkError = (View) => {
  return (props) => {
    const [error, setError] = useState(true);

    return <>{error ? <ErrorMessage /> : <View setError={setError} {...props} />}</>;
  };
};

export default withNetworkError;
