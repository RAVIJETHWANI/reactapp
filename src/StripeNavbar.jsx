import React from "react";
import { useGlobalContext } from "./StripeContext";
import logo1 from "./images/logo1.svg"
import { FaBars } from "react-icons/fa";

const Navbar = ()=>{
    const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext()
    const displaySubmenu =(e)=>{
        const page=e.target.textContent
      //  const page = e.target.textContent;
     //   console.log(page)
        const tempbtn=e.target.getBoundingClientRect();
        const center = (tempbtn.left+tempbtn.right)/2
        console.log(center)
        const bottom = (tempbtn.bottom-3)
        console.log(tempbtn)
        openSubmenu(page, {center,bottom})
    }
    const handleSubmenu =(e)=>{
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }
    return (
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo1} alt="logo" className="nav-logo" />
                <button className="btn toggle-btn" onClick={openSidebar}><FaBars /></button>
            </div>
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                        products
                    </button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                    developers
                    </button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>
                        company
                    </button>
                </li>
            </ul>
            <button className="btn signin-btn">sign in</button>
        </div>
      </nav>
    )
}

export default Navbar
