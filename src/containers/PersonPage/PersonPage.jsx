import React, { useEffect, useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import api from "../../api";

import withNetworkError from "@/hocs/withNetworkError";

import PersonInfo from "@/components/PersonPage/PersonInfo";
import PersonBackLink from "../../components/PersonPage/PersonBackLink";
import UILoader from "@/components/UI/UILoader";

import styles from "./PersonPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/actions";
import UIFavorite from "../../components/UI/UIFavorite";

const PersonFilms = lazy(() => import("@/components/PersonPage/PersonFilms"));

const {
  page,
  page__title,
  page__img,
  page__info,
  page__films,
  page__container,
  page__link,
  page__wrapper,
  page__favorite,
} = styles;

const PersonPage = ({ match, setError }) => {
  const id = match.params.id;
  const [person, setPerson] = useState(null);
  const [inFavorite, setInFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorites.list);

  const getResources = async (id) => {
    const data = await api.getPerson(id);
    if (!data) {
      setError(true);
    } else {
      setError(false);
      setPerson(data);
    }
  };

  const checkFavorite = () => {
    return !!favoriteList.find((item) => item.id === id);
  };

  useEffect(() => {
    getResources(id);
    setInFavorite(checkFavorite());
  }, []);

  const favoriteHandler = () => {
    const { id, name, image } = person;
    const needed = checkFavorite();

    if (needed) {
      dispatch(removeFromFavorites(id));
      setInFavorite(false);
    } else {
      dispatch(addToFavorites({ id, image, name }));
      setInFavorite(true);
    }
  };

  return (
    <section className={page}>
      <div className={page__link}>
        <PersonBackLink />
      </div>
      {person && (
        <div className={page__wrapper}>
          <h1 className={page__title}>{person.name}</h1>
          <div className={page__container}>
            <div className={page__img}>
              <img className={page__img} src={person.image} alt={person?.name} />
              <UIFavorite color={inFavorite ? "yellow" : "violet"} classes={page__favorite} handler={favoriteHandler} />
            </div>
            <div className={page__info}>
              <PersonInfo fields={person.fields} />
            </div>
            <div className={page__films}>
              <Suspense fallback={<UILoader />}>
                <PersonFilms films={person.films} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setError: PropTypes.func,
};

export default withNetworkError(PersonPage);
