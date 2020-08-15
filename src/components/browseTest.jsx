import React from "react";

const Categories = (props) => {
  console.log(props.categories);
  return (
    <>
      {props.categories.map((category) => {
        return (
          <div className="genre-card">
            <p>{category.name}</p>
            <img src={`${category.icons[0].url}`} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Categories;
