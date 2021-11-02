import React, { useEffect, useRef, useState } from "react";
import {FaBars,FaTwitter } from 'react-icons/fa';
import logo from "./images/logo.svg"
import {links,social} from "./NavbarData"


const Navbar = ( )=>{
    const [showLinks,setShowLinks]=useState(false)
    const linkContainerRef=useRef(null)
    const linkRef=useRef(null)

    useEffect(()=>{
        const linksHeight=linkRef.current.getBoundingClientRect().height
        console.log(linksHeight)
        if(showLinks){
            linkContainerRef.current.style.height=`${linksHeight}px`
        }else{
            linkContainerRef.current.style.height="0px"
        }
    },[showLinks])
    return <nav>
        <div className="nav-center">
            <div className="nav-header">
               <img src={logo} alt="logo" />
               <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                   <FaBars />
               </button>
            </div>
            {
                <div className='links-container' ref={linkContainerRef}>
                <ul className="links" ref={linkRef}>
                    {
                        links.map((linkItem,index)=>{
                            return <li key={index}><a href={linkItem.url}>{linkItem.text}</a></li>
                        })
                    }
                </ul>
            </div>
            }
            
            <ul className="social-icons">
                {
                    social.map((socialItem,index)=>{
                        return <li key={index}>
                            <a href={socialItem.url}>{socialItem.icon}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    </nav>
}

export default Navbar
