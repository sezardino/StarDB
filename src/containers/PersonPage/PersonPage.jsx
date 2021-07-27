import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";

import withNetworkError from "@/hocs/withNetworkError";

import styles from "./PersonPage.module.css";
import PersonInfo from "@/components/PersonPage/PersonInfo";

const PersonPage = ({ match, setError }) => {
  const [person, setPerson] = useState(null);

  const getResources = async (id) => {
    const data = await api.getPerson(id);
    if (!data) {
      setError(true);
    } else {
      setError(false);
      setPerson(data);
    }
  };

  useEffect(() => {
    const id = match.params.id;
    getResources(id);
  }, []);

  return <PersonInfo personData={person} />;
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setError: PropTypes.func,
};

export default withNetworkError(PersonPage);
