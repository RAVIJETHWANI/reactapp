import React from 'react'
import { useGlobalContext } from './CartContextprtc'

// components
import Navbar from './CartNavbarprtc'
import CartContainer from './CartContainerprtc'
// items

function CartprtcApp() {
    const {loading}=useGlobalContext()
  if (loading) {
     return (
      <div className='loading'>
        <h1>Loading...</h1>
       </div>
     )
   }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default CartprtcApp