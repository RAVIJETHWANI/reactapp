import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import EcommerceApp from './EcommerceApp';
//import { AppProvider } from './CartContextprtc';
import "./Ecommerce.css"

//import store from "./Store"
//import {Provider} from "react-redux"
//store.subscribe(()=>console.log(store.getState()))
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context';
//import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-6-a59p6m.us.auth0.com
//dPU8LmhetxgE4iUHQesLAWlHJOroYdAW
ReactDOM.render(
<>
<Auth0Provider
    domain="dev-6-a59p6m.us.auth0.com"
    clientId="dPU8LmhetxgE4iUHQesLAWlHJOroYdAW"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
  <UserProvider>
<BrowserRouter>
<ProductsProvider>
<FilterProvider>
<CartProvider>
  <EcommerceApp />
  </CartProvider>
  </FilterProvider>
</ProductsProvider>
  
</BrowserRouter>
</UserProvider>
</Auth0Provider>
</>,document.getElementById('root')
  );