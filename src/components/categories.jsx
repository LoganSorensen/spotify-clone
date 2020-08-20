import React from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
  return (
    <>
      {props.categories.map((category, index) => {
        return (
          <Link
            to={`/category/${category.id}`}
            key={index}
            className="genre-card"
          >
            <p>{category.name}</p>
            <img src={`${category.icons[0].url}`} alt="" />
          </Link>
        );
      })}
    </>
  );
};

export default Categories;
