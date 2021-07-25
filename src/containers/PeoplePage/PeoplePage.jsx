import { useEffect, useState } from "react";
import "./PeoplePage.module.css";
import api from "../../utils/network";
import PeopleList from "../../components/PeoplePage/PeopleList";
import withNetworkError from "../../hocs/withNetworkError";

const PeoplePage = ({ setError }) => {
  const [list, setList] = useState([]);
  const getResources = async () => {
    const data = await api.getPeople();
    if (!data) {
      setError(true);
    } else {
      setError(false);
      setList(data);
    }
  };
  useEffect(() => {
    getResources();
  }, []);
  return (
    <>
      <PeopleList people={list} />
    </>
  );
};

export default withNetworkError(PeoplePage);
