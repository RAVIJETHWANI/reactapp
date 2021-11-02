import React from "react";
import { NavLink } from "react-router-dom";
const Menu =()=>{
    return (
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">about us   </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">Service   </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">search   </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/sham/kumar">User   </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">  contact  us</NavLink>
        </div>
        </>
    )
}
export default Menu;