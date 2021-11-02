import React, { useState } from "react"
import {FaEdit,FaTrash} from "react-icons/fa"
const Listcom=(props)=>{
    const [line,setLine]=useState(false)
     const cutit=()=>{
         setLine(true)
     }
    return (
        <>
        <div className="Todo_style">
                            <span onClick={cutit}><FaTrash className="fa-times"  /></span>
                            <li  style={{textDecoration: line? "line-through":"none"}}>{props.text}</li>
                            </div>
        </>
    )
}

export default Listcom