import React, { useState } from "react";

import WebImg from "../src/images/img1.png"
import Common from "./CommonWeb";
const Home = () => {

    return (
        <>
        <Common name="Grow your business" imgsrc={WebImg} visit="./service" btname="Get started" />
        </>
    )
}
export default Home;