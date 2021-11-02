
import React from "react";
import Home from "./HomeWeb";
import Service from "./ServiceWeb"
import About from "./AboutWeb"
import Contact from "./ContactWeb"
import Navbar from "./NavbarWeb";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Route, Switch, Redirect } from "react-router-dom";
const Web = ()=>{
    return(
        <>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route  exact path="/service" component={Service}  />
                <Route  exact path="/contact" component={Contact} />
            <Home />
            <Redirect to="/" />
            </Switch>
        </>
    )
}
export default Web;