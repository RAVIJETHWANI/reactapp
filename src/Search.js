import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search=()=>{
    //const [expend,setExpend]=useState(false);
     const [img,setImg]=useState("")
     const InputEvent =(event)=>{
         const data = event.target.value
        setImg(data)
        console.log(data)
     }
     //const expendIt =()=>{
        //setExpend(true)
  //  }
    return (
        <>
            <div className="searchBar">
            <input type="text" placeholder="search anything" value={img} onChange={InputEvent}  />
         {/*   {expend?<SearchResult name={img}/> :null }*/}
         {img===""? null: <SearchResult name={img} />}

            </div>
        </>
    )
}
export default Search