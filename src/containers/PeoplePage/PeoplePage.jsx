import { useEffect, useState } from "react";
import "./PeoplePage.module.css";
import api from "../../utils/network";
import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage = () => {
  const [list, setList] = useState([]);
  const getResources = async () => {
    const data = await api.getPeople();
    setList(data);
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

export default PeoplePage;
