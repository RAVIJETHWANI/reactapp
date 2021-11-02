import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tour2"

const url = 'https://course-api.com/react-tours-project'
const TourApp = ()=>{
    const[loading, setLoading]=useState(true);
    const [tours, setTours]=useState([])

   

    const removeTour = (id)=>{
        const newTour= tours.filter((tour)=> tour.id!==id);
        setTours(newTour)
    }
    const fetchTours= async ()=>{
        setLoading(true)
        try{
           
        const response= await fetch(url);
        const newtours= await response.json();
        setLoading(false)
        setTours(newtours)
        console.log(newtours)
        
        }catch(error){
            setLoading(false)
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchTours()
        
    },[])
    if(loading){
        return(
            <main>
                <Loading />
            </main>
        )
    }if(tours.length===0){
        
       return (
        <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline">
            <button className ="btn" onClick={fetchTours}>refresh</button>
            </div>
        </div>
        </section>
       )
       

    }
    return(
        <main>
           <Tours props={tours} removeTourProps={removeTour} /> 
        </main>
    )
}
export default TourApp;