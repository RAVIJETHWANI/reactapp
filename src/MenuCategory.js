/*import React from "react";

const MenuCategory =({Mycategory,filter})=>{
    return(
        <div className="btn-container">
           {
               Mycategory.map((category,index)=>{
                return( 
                <button type="button" className="filter-btn" key={index} onClick={()=>filter(category)}>{category}</button>
                )
               })
           }
            
        </div>
    )
}
export default MenuCategory
*/
import React from 'react';

const MenuCategory = ({ MyCategory, Newfilter }) => {
  return (
    <div className="btn-container">
      {MyCategory.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => Newfilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategory