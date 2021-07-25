import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useQueryParams = (param) => {
  const { search } = useLocation();
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const params = search.split("?");

    const neededValue = params.find((item) => item.includes(param)).split("=")[1];
    setValue(neededValue);
  }, [search]);

  return value;
};
