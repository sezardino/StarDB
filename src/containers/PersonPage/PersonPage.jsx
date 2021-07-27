import React, { useEffect, useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import api from "../../api";

import withNetworkError from "@/hocs/withNetworkError";

import PersonInfo from "@/components/PersonPage/PersonInfo";
import PersonBackLink from "../../components/PersonPage/PersonBackLink";

import styles from "./PersonPage.module.css";
import UILoader from "../../components/UI/UILoader";

const PersonFilms = lazy(() => import("@/components/PersonPage/PersonFilms"));

const { page, page__title, page__img, page__info, page__films, page__container, page__link, page__wrapper } = styles;

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

  return (
    <section className={page}>
      <div className={page__link}>
        <PersonBackLink />
      </div>
      {person && (
        <div className={page__wrapper}>
          <h1 className={page__title}>{person.name}</h1>
          <div className={page__container}>
            <img className={page__img} src={person.image} alt={person?.name} />
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
