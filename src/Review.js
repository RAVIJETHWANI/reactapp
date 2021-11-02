import React, { useState,useEffect } from "react"
import People from "./ReviewData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
const Review = ()=>{
    const [index,setIndex]=useState(0)
  
   

       
    const {name,job,image,text}=People[index]

   
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="auther">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btm-container">
                <button onClick={()=>{
                   
                 
                    setIndex((index)=>{
                        let newIndex=index-1
                        if(newIndex<0){
                            newIndex=People.length-1;
                        }
                        return newIndex
                    })
                    
                }} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button  onClick={()=>{
                       setIndex((index)=>{
                           
                        let newIndex=index+1
                        if(newIndex>People.length-1){
                            newIndex=0;
                        }
                        return newIndex
                    })
                    }} className="next-btn">
                    <FaChevronRight />
                </button>
               
            </div>
            <button className="random-btn" onClick={()=>{
                    setIndex(()=>{
                        let randomNumber=Math.floor(Math.random() *People.length);
                         return randomNumber
                        
                    })
                }}>
                    surprise me
                </button>
        </article>
    )
}
export default Review;