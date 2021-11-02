const reducer=(state,action)=>{
    if(action.type==="CLEAR_CART"){
        return {...state, cart:[]}
    }
    if(action.type==="REMOVE"){
        return{...state,cart:state.cart.filter((cartitem)=>cartitem.id!==action.payload)}
    }if(action.type==="INCREASE"){
        let tempCart= state.cart.map((cartitems)=>{
            if(cartitems.id===action.payload){
                return{...cartitems,amount:cartitems.amount+1}
            }
            return cartitems
        })
        return {...state,cart:tempCart}
    }
    if(action.type==="DECREASE"){
        let tempCart= state.cart.map((cartitems)=>{
            if(cartitems.id===action.payload){
                return{...cartitems,amount:cartitems.amount-1}
            }
            return cartitems
        }).filter((cartitems)=>cartitems.amount!==0)
        return {...state,cart:tempCart}
    }
    if(action.type==="GET_TOTALS"){
        let {total,amount} = state.cart.reduce((cartTotal,cartitem)=>{
            const {price,amount}=cartitem
            const itemTotal=price*amount
            console.log(cartTotal)
            cartTotal.total+=itemTotal;
            console.log(cartTotal)
            cartTotal.amount+=amount
            return cartTotal
        },{
            total:0,
            amount:0
        })
        total=parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    if(action.type==="LOADING"){
        return {...state,loading:true}
    }if(action.type==="DISPLAY_CART"){
        return{...state,cart:action.payload,loading:false}
    }
    return state
    
}
export default reducer