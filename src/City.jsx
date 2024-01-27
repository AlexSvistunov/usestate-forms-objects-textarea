import React from "react";

const City = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        {props.cities[props.currentIndex].name}{" "}
        <span>{props.cities[props.currentIndex].description}</span>
      </div>
      <textarea
        value={props.cities[props.currentIndex].description}
        onChange={(e) => props.changeContent(props.currentIndex, e.target.value)}
      ></textarea>
    </div>
  );
};

export default City;
