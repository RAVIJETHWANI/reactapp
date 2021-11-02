import React, { useState } from "react";
import "./Accordian.css";
import { questions } from "./Api";
import  MyAccordian from "./MyAccordian";

const Accordian = () =>{
    const [data, setData] = useState(questions);

    return (
        <>
        <section className="main-div">
        <h1>react interview question</h1>
           {
                data.map((curelm)=>{
                    const {id}=curelm;
                    return <MyAccordian key={id} {...curelm} />
                })
           }
        </section>
        </>
    )
};

export default Accordian;