import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./SearchInfo.module.css";
const { wrapper, list, listItem, link, img, title } = styles;

const SearchInfo = ({ searchList }) => {
  return (
    <>
      <div className={wrapper}>
        {!searchList?.length && <h2 className={title}>No Results</h2>}
        <ul className={list}>
          {searchList?.map((item) => (
            <li className={listItem} key={item.name}>
              <Link className={link} to={`/people/${item.id}`}>
                <img className={img} src={item.image} alt={item.name} />
                <h2 className={title}>{item.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

SearchInfo.propTypes = {
  list: PropTypes.array,
};

export default SearchInfo;
