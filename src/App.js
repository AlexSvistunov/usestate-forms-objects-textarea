import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import City from "./City";
import CityList from "./CityList";

function App() {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "Москва",
      description: "Столица, самый большой город страны",
    },
    { id: 2, name: "Зеленоград", description: "Подмосковье =)" },
  ]);

  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const changeCity = (index) => {
    setCurrentCityIndex(index);
  };

  const changeCitiesContent = (indexElement, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === indexElement) {
          return {
            ...city,
            description

          };
        }

        return city
      })
    );
  };

  return (
    <div className="App">
      <City
        cities={cities}
        currentIndex={currentCityIndex}
        changeContent={changeCitiesContent}
      />
      <CityList cities={cities} changeCity={changeCity} />
    </div>
  );
}

export default App;
