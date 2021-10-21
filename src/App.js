import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SerachByName from "./components/SearchByName";
import "bootstrap/dist/css/bootstrap.css";
import SearchByIngredients from "./components/SerachByIngredients";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/searchname">
          <SerachByName />
        </Route>
        <Route path="/searchingredients">
          <SerachByName />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
