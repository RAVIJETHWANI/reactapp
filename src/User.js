import { colors } from "@material-ui/core";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
/*const User =({match})=>{
    return <h1>user {match.params.fname} page</h1>
}*/
const User =({})=>{
    const {fname, lname} = useParams();
    const location = useLocation();
    console.log(location)
    return (
    <>
    <h1>user {fname} {lname} page</h1>
        <p>my current location is {location.pathname}</p>
        {location.pathname===`/user/sham/kumar`?(<button onClick={()=> alert("you find me")}>click me</button>):null}
    </>
    )
}
export default User;