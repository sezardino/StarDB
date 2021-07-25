import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getParamValue } from "../utils/network";

export const useQueryParams = (param) => {
  const { search } = useLocation();
  const [value, setValue] = useState(getParamValue(search, param));
  useEffect(() => {
    setValue(getParamValue(search, param));
  }, [search]);

  return value;
};
