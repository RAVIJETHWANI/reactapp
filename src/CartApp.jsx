import React from "react"
import { useGlobalContext } from "./CartContext"
import CartNavbar from "./CartNavbar"
import CartContainer from "./CartContainer"
const CartApp =()=>{
    const {loading}=useGlobalContext()
    if(loading){
        return(
            <div className="loading">
                <h1>loading...</h1>
            </div>
        )
    }
    return (
        <main>
       <CartNavbar />
       <CartContainer />
       </main>
    )
}

export default CartApp
