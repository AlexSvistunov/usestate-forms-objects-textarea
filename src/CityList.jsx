import React from "react";

const CityList = (props) => {
  return (
    <>
      <ul>
        {props.cities.map((city, index) => (
          <li onClick={() => props.changeCity(index)} key={props.cities[index].id}>
            {city.name} {city.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CityList;
