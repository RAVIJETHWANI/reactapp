import React, { useEffect, useState } from "react";

const State = ()=>{
    const [data,setData]=useState([]);

    const getCovidData= async ()=>{
        const res= await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise)
        setData(actualData.statewise)
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                <h1 className="mb-5 text-center">State wise covid 19 app of <span className="font-weight-bold"></span>india</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Update</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                data.map((curelm,ind)=>{
                                    return(
                                        
                                        <tr key={ind}>
                                            <th>{curelm.state}</th>
                                            <td>{curelm.confirmed}</td>
                                            <td>{curelm.recovered}</td>
                                            <td>{curelm.deaths}</td>
                                            <td>{curelm.active}</td>
                                            <td>{curelm.lastupdatedtime}</td>
                                         </tr>
                    
                                    )
                                })
                            }
            
                        </tbody>
                    </table>
                </div>
            </div>
           
        </>
    )
}
export default State