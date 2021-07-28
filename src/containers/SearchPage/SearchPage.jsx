import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchInfo from "@/components/SearchPage/SearchInfo";

import api from "@/api";
import withNetworkError from "@/hocs/withNetworkError";

import styles from "./SearchPage.module.css";
import debounce from "../../utils/debounce";
import UIInput from "../../components/UI/UIInput";
const { page, page__input, page__wrapper } = styles;

const SearchPage = ({ setError }) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(null);

  const getResources = async (value) => {
    const result = await api.getPeopleSearch(value);

    if (!result) {
      setError(true);
    } else {
      setError(false);
      setList(result);
    }
  };

  useEffect(() => {
    getResources("");
  }, []);

  const inputHandler = (value) => {
    console.log(value);
    setValue(value);
    debounce(() => getResources(value), 300);
  };

  return (
    <section className={page}>
      <h1>Search Page</h1>
      <UIInput classes={`${page__input}`} placeholder="Type name of character" value={value} handler={inputHandler} />
      <div className={page__wrapper}>
        <SearchInfo searchList={list} />
      </div>
    </section>
  );
};

SearchPage.propTypes = {
  setError: PropTypes.func,
};

export default withNetworkError(SearchPage);
