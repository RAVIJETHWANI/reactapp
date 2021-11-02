import React from "react";
import { useGlobalContext } from "./StripeContext";
import phone from "./images/phone.svg"
const Hero = ()=>{
    const {closeSubmenu}=useGlobalContext();
    
    return (
       <section className="hero" onMouseOver={closeSubmenu}>
           <div className="hero-center">
               <article className="hero-info">
                   <h1>payment infrastructure for the internet</h1>
                   <p>millions of company of all sizes- fr0m startups to fortune 500s-use
                   millions of company of all sizes- fr0m startups to fortune 500s-use
                   millions of company of all sizes- fr0m startups to fortune 500s-use</p>
                   <button className="btn">start now</button>
               </article>
               <article className="hero-images">
                   <img src={phone} className="phone-img" alt="phone-image"/>
               </article>
           </div>
       </section>
    )
}

export default Hero