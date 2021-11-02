import React from "react";
import WebImg from "../src/images/img2.png"
import Common from "./CommonWeb"
const About = ()=>{
    return(
        <>
            <Common name="welcome to about page" imgsrc={WebImg} visit="./contact" btname="Contact now" />
        </>
    )
}
export default About;