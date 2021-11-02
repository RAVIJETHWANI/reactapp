import React, { useState } from "react"
import SingleColor from "./SingleColor"
import Values from "values.js"

const ColorApp = ()=>{
    const [color,setColor]=useState("");
    const [error,setError]=useState(false);
    const [list,setList]=useState(new Values("#f15025").all(50))
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("krishnA")
        try{
            let colors= new Values(color).all(10)
            setList(colors)
        }
       catch(error){
           setError(true)
           console.log(error)
       }
    }
    return (
        <>
        <section className="container">
        <h3> color generater</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className={`${error? 'error': null}`} value={color} onChange={(event)=>setColor(event.target.value)} placeholder="#f15025"/>
                <button type="submit" className="btn">submit</button>
            </form>
        </section>

        <section className="color">
            {
                list.map((coloritem,index)=>{
            
                    return <SingleColor key={index} {...coloritem} props={index} hexColor={coloritem.hex}/>
                })
            }
        </section>
        </>
    )
}

export default ColorApp