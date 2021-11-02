import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./StripeContext";

const Submenu = ()=>{
    const {isSubmenuOpen,location, pages:{page,links}}=useGlobalContext();
    const container=useRef(null)
    const [column,setColumn]=useState("col-2")
    useEffect(()=>{
        setColumn("col-2")
        const subMenu=container.current
        const {center,bottom}=location
        subMenu.style.left=`${center}px`;
        subMenu.style.top=`${bottom}px`
        if(links.length===3){
            setColumn("col-3")
        }if(links.length>3){
            setColumn("col-4")
        }
    },[location,links])
    
    return (
       <aside className={`${isSubmenuOpen? 'submenu show': 'submenu'}`} ref={container}>
       <h4>{page}</h4>
       <div className={`submenu-center ${column}`}>
           {
               links.map((link,index)=>{
                   const {label,icon,url}=link
                   return <a key={index} href={url}>{icon}{label}</a>

               })
           }
       </div>

       </aside>
    )
}

export default Submenu