import React, { useEffect, useState } from "react"
import  rgbToHex from "./ColorUtils"
const SingleColor = ({rgb,weight,props,hexColor})=>{
    
    const [alert,setAlert]=useState(false)
    const hex=  rgbToHex(...rgb)
    const bcg=rgb.join(',')
    const hexValue=`#${hexColor}`
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        },3000)
        return ()=> clearTimeout(timeout)
    },[alert])
    return (
        
           <article className={`color ${props>10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={()=>{setAlert(true)
            navigator.clipboard.writeText(hexValue)
           }} >
               <p className="percent-value">{weight}%</p>
               <p className="color-value">{hexValue}</p>
               {alert && <p className="alert">copied to clipboard</p>}
           </article>
        
    )
}
export default SingleColor
