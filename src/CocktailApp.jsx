import React from "react";
 import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
 import Home from "./CocktailHome"
 import About from "./CocktailAbout"
 import SingleCocktail from "./CocktailSingle"
 import Error from "./CocktailError"
 import Navbar from "./CocktailNavbar"
 
 const CocktailApp = ()=>{
     return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
 }
 export default CocktailApp;
 