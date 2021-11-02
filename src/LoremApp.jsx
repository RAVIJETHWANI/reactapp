import React, { useState } from "react"
import textData from "./LoremData"
const LoremApp =()=>{
    const [count,setCount]=useState(0);
    const [text,setText]=useState([])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let amount = parseInt(count);
        if(count<=0){
            amount=1;
        }if(count>8){
            amount=8;
        }
        console.log( typeof amount)
        setText(textData.slice(0,amount))
        
    }

    return (
        <>
            <section className="section-center">
                 <h3>tired of boring Lorem ipsum?</h3>
                 <form className="lorem-form" onSubmit={handleSubmit}>
                 <lable htmlFor="amount">
                     paraghraph:
                 </lable>
                 <input type="number" name="amount" id="amount" value={count} onChange={(e)=> setCount(e.target.value)} />
                 <button type="submit" className="btn">generate</button>
                 </form>
                 <article className="lorem-text">
                    {text.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })}
                 </article>
            </section>
           
        </>
    )
}

export default LoremApp