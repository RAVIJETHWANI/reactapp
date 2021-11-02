import React, { useState,useEffect } from "react";
import "./Weather.css"

const Weather=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai")

   

    useEffect(()=>{
        const getWeatherData= async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=41f8f4d1c93e5df6ed22f4aca27d3c71`
            const res= await fetch(url);
            const actualData = await res.json();
             console.log(actualData)
             setCity(actualData.main)
         }
         getWeatherData();
        
    },[search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search}  className="inputFeild" onChange={(event)=>{
                        const value=event.target.value;
                        setSearch(value)
                        console.log(value)
                    }}/>
                </div>
           {!city?(
               <p className="errorMsg">no data fount</p>): (
               <div>
               <div className="info">
                <h2 className="location">
                <i id="weathercon" className="fas fa-street-view"></i>{search} 
                </h2>
                <h1 className="temp">{city.temp} °cel</h1>
                <h3 className="tempmin-max">min: {city.temp_min} °cel max: {city.temp_max} °cel</h3>
            </div>
            <div className="wave one"></div>
            <div className=" wave two"></div>
            <div className="wave three"></div>
            </div>
               )
           
           }

           </div>
           
        </>
    )
}
export default Weather