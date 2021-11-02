
import React, { useState } from "react"
 import MenuData from "./MenuData"
import MenuCategory from "./MenuCategory"
import MenuNew from './MenuNew'
//import "../src/img"

const allCategory= ["all", ...new Set(MenuData.map((item)=>item.category))]

console.log(allCategory)
 const MenuApp=()=>{
     const [menuItems,setMenuItems]=useState(MenuData);
     const [categories,setCategories]=useState(allCategory)
    
     
     const filterItems = (category)=>{
         if(category==="all"){
           return  setMenuItems(MenuData)
         }
        const newItems =MenuData.filter((item)=>item.category===category)
        setMenuItems(newItems)
     }

     return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline">

                    </div>
                </div>
                <MenuCategory MyCategory={categories} Newfilter={filterItems} />
                <MenuNew props={menuItems}/>
            </section>
        </main>
     )
 }

 export default MenuApp