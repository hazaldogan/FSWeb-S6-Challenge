import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Karakter from "./components/Karakter";
import KarakterDetails from "./components/KarakterDetails";

const App = () => {
  const [karakter, setKarakter] = useState(null);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(function (response) {
        console.log(response);
        setKarakter(response.data);
        setError(null);
      })
      .catch(function (error) {
        console.log(error);
        setError(error.response.data.msg);
      })
      .finally(function () {});
  }, [selected]);

  const karakterClickHandler = (ind) => {
    setSelected(karakter[ind]);
  };

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      <Karakter
        clickProp={karakterClickHandler}
        viewData={karakter}
        selected={selected}
      />
    </div>
  );
};

export default App;
