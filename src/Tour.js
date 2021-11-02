import React, { useState } from "react";

const Tour = ({props2,removeTourProps2})=>{
    const [readmore,setReadmore]=useState(false)
    const more=()=>{
        setReadmore(!readmore)
    }
    return(
        <>
            <article className="single-tour">
                <img src={props2.image} alt={props2.name} />
                <footer>
                    <div className="tour-info">
                        <h4>{props2.name}</h4>
                        <h4 className="tour-price">$ {props2.price}</h4>
                    </div>
                    <p>{readmore?props2.info:`${props2.info.slice(0,200)}...`}<button onClick={more}>{readmore?"show-less":"read more"}</button></p>
                    <button className="delete-btn" onClick={()=>removeTourProps2(props2.id)}>not interested</button>
                </footer>
            </article>
            
        </>
    )
}
export default Tour;