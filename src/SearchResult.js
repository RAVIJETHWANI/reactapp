import React, { useState } from "react";

const SearchResult=(props)=>{

    const img = `https://source.unsplash.com//400x300/? ${props.name}`

    return (
        <>
            <div >
            <img src={img} alt="search img" />
            </div>
        </>
    )
}
export default SearchResult