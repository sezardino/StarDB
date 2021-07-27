import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";

import { wrapper, list, item, episode, title } from "./PersonFilms.module.css";

const PersonFilms = ({ films }) => {
  const [filmsData, setFilmsData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await api.makeConcurrentRequest(films);
      setFilmsData(data);
    })();
  }, []);

  return (
    <div className={wrapper}>
      <ul className={list}>
        {filmsData?.map((film) => (
          <li className={item} key={film.episode}>
            <span className={episode}>Episode {film.episode}</span>
            <span className={title}>{film.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  films: PropTypes.array,
};

export default PersonFilms;
