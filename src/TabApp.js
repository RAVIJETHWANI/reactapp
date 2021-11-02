
import React, { useEffect, useState } from 'react';
import {FaAngleDoubleRight} from "react-icons/fa"
const url = 'https://course-api.com/react-tabs-project'
const TabApp = () => {
    const [loading,setLoading]=useState(true);
    const [job,setJob]=useState([])
    const [value,setValue]=useState(0)

    const fetchJob = async ()=>{
        const response = await fetch(url)
        const newjob= await response.json()
        console.log(newjob)
        setJob(newjob)
        setLoading(false)
    }
    useEffect(()=>{
        fetchJob()
    },[])

    if(loading){
        return(
            <section className="section loading">
                <h1>loading...</h1>
            </section>
        )
    }
    const {company,dates,duties,title}=job[value]
  return (
      

    <section className="section">
        <div className="title">
            <h2>expierence</h2>
            <div className="underline">

            </div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {
                        job.map((item,index)=>{
                            return <button className={`job-btn ${index===value && 'active-btn' }`} key={index} onClick={()=>{
                                setValue(index)
                            }}>{item.company}</button>
                        })
                    }
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-data">{dates}</p>
                    {
                        duties.map((duty,index)=>{
                            return (
                                <div className="job-desc" key={index}>
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
        
    </section>
  )
  
};

export default TabApp