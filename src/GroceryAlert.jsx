/*import React, { useEffect } from "react"

const GroceryList =({type,msg,removeAlert})=>{
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            removeAlert()
        },3000)
        return ()=>clearTimeout(timeOut)
    },[])
    return <p className={`alert alert-${type}`}>{msg}</p>
}

export default GroceryList
*/
import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert,list }) => {
   
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;