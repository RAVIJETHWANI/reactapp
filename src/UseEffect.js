import React, { useEffect, useState } from "react";

const Use = ()=>{
    const [num, setNum]=useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${num} times`;
      });
    return(
        <>
            <button onClick={()=>{
                setNum(num+1)
            }}>click me {num}</button>
        </>
    )
}
export default Use