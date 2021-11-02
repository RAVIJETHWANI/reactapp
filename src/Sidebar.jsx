import React, { useState } from "react";
import {social,links} from "./SidebarData"
import {FaTimes} from "react-icons/fa"
import logo from "./images/logo.svg"
import { useGlobal } from "./SidebarContext";
const Sidbar = ( )=>{

    const {isSidebarOpen,closeSidebar}=useGlobal();
    return (
       <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
           <div className="sidebar-header">
               <img src={logo} className="logo" alt="logo" />
               <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
           </div>
           <ul className="links">
           {
               links.map((linkItem,index)=>{
                   return  <li key={index}><a href={linkItem.url}>{linkItem.icon}{linkItem.text}</a></li>
               })
           }
           </ul>
       </aside>
    )
}

export default Sidbar