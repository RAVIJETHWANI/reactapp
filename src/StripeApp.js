import React from "react";
import Navbar from "./StripeNavbar";
import Sidebar from "./StripeSidebar";
import Hero from "./StripeHero";
import Submenu from "./StripeSubmenu";
const StripeApp = ()=>{
    return (
        <>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </>
    )
}

export default StripeApp