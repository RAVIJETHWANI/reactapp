import React from "react";

const MenuNew =({props})=>{
    return(
        <div className="section-center">
            {
                props.map((items)=>{
                    const {id,title,img,desc,price}=items
                    return(
                     <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <h4>{title}</h4>
                            <h4 className="price">{price}</h4>
                        </div>
                        <p className="item-text">{desc}</p>

                    </article>
                    )
                })
            }
        </div>
    )
}
export default MenuNew
