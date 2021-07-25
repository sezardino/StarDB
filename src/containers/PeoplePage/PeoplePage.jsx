import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./PeoplePage.module.css";
import api from "@/utils/network";
import PeopleList from "@/components/PeoplePage/PeopleList";
import PeopleNavigation from "@/components/PeoplePage/PeopleNavigation";

import withNetworkError from "@/hocs/withNetworkError";
import { useQueryParams } from "../../hooks/useQueryParams";

const PeoplePage = ({ setError }) => {
  const [list, setList] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const currentPage = useQueryParams("page");

  const getResources = async (page = 1) => {
    const { next, previous, list } = await api.getPeople(page);
    if (!list) {
      setError(true);
    } else {
      setError(false);
      setNext(next);
      setPrevious(previous);
      setList(list);
    }
  };
  useEffect(() => {
    getResources(currentPage);
  }, [currentPage]);

  return (
    <>
      <PeopleNavigation next={next} previous={previous} />
      <PeopleList people={list} />
    </>
  );
};

PeoplePage.propTypes = {
  setError: PropTypes.func,
};

export default withNetworkError(PeoplePage);
