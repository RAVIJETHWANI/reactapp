import React from "react";
import Tour from "./Tour"
const Tours = ({props,removeTourProps})=>{
    
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline">
                </div>
            </div>
            <div>
            {
               props.map((tour)=>{
                    return <Tour props2={tour} key={tour.id} {...tour} removeTourProps2={removeTourProps}/>
                })
            }
            </div>
        </section>
    )
}
export default Tours;