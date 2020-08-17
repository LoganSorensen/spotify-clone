import React from "react";

const Categories = (props) => {
  return (
    <>
      {props.categories.map((category, index) => {
        return (
          <div key={index} className="genre-card">
            <p>{category.name}</p>
            <img src={`${category.icons[0].url}`} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Categories;
