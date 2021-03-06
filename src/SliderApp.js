import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import peopleData from "./SliderData";
const SliderApp = ()=>{
    const [people,setPeople]=useState(peopleData)
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        if(index<0){
            setIndex(people.length-1)
        }if(index>people.length-1){
            setIndex(0)
        }
    },[index,people])

    useEffect(()=>{
     let slider=   setInterval(() => {
            setIndex(index+1)
        }, 3000);
        return ()=> clearInterval(slider)
    },[index])
    return <section className="section">
        <div className="title">
            <h2><span>/</span> reviews</h2>
        </div>
        <div className="section-center">
            {
                people.map((person,personIndex)=>{
                    const {id,image,name,title,quote}=person

                    let position="nextSlide"
                    if(personIndex===index){
                        position="activeSlide"
                    }if(personIndex===index-1 || (index===0 && personIndex=== people.length-1)){
                        position="lastSlide"
                    }
                    return (

                        <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                        </article>
                        )
                    
                })
            }
            <button className="prev" onClick={()=> setIndex(index-1)}>
                <FiChevronLeft />
            </button>
            <button className="next" onClick={()=> setIndex(index+1)}>
                <FiChevronsRight />
            </button>
        </div>
    </section>
}

export  default SliderApp