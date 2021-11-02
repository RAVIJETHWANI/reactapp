import React from "react";
import {  Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import User from "./User";
import Error  from "./Error";
import Menu from "./Menu"
import Search from "./Search"
const RouterApp =()=>{
    const Name = ()=>{
        return <h1>hello krishna i am a Name page</h1>
    }
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={()=><About name="About" />} />
                <Route  exact path="/Service" render={()=><Service name="service" />} />
                <Route  exact path="/Search" component={Search}  />
                <Route  exact path="/contact" component={Contact} />
                <Route  path="/contact/Name" component={Name} />
                <Route  path="/user/:fname/:lname" component={User} />
                <Route  component={Error} />

            </Switch>
        </>
    )
    
}
export default RouterApp