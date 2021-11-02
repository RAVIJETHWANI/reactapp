import React, { useContext } from "react";
import {FaBars} from "react-icons/fa"
import SidebarModal from "./SidebarModal";
import {useGlobal } from "./SidebarContext";
const SidbarHome = ( )=>{
    const {openSidebar ,openModal} = useGlobal();
   
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>sidebar modal</button>
        </main>
    )
}

export default SidbarHome