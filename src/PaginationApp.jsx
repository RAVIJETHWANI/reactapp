import React, { useState, useEffect } from 'react'
import { useFetch } from './PaginationUseFetch'
import Follower from './PaginationFollower'
function App() {
    const {data,loading}=useFetch()
    const [page,setPage]=useState(0)
    const [followers,setFollowers]=useState([])
    useEffect(()=>{
        
        if(loading){
            return
        }
        setFollowers(data[page])
    },[loading,page])
   const prevbtn=()=>{
   
      setPage((oldPage)=>{
          let prevpage=oldPage-1
          if(prevpage<0){
               prevpage=data.length-1

          }
          return prevpage
      })
   }
   const nextbtn=()=>{
   
    setPage((oldPage)=>{
        let nextpage=oldPage+1
        if(nextpage>data.length-1){
             nextpage=0

        }
        return nextpage
    })
 }
   
  return (
      <main>
        <div className="section-title">
           <h1> {loading?"loading....":"pagination"}</h1>
            <div className="underline">
            </div>
        </div>
        <section className="followers">
            <div className="container">
                {followers.map((follower,index)=>{
                    return<Follower key={index} {...follower} />
                })}
            </div>
            {!loading && (<div className="btn-container">
            <button className="page-btn" onClick={prevbtn}>pre</button>
               {data.map((item,index)=>{
                   return <button key={index} className={`${index===page?"active-btn page-btn":"page-btn"}`} onClick={()=>setPage(index)}>{index+1}</button>
               })}
               <button className="page-btn" onClick={nextbtn}>next</button>
            </div>)}
           
        </section>
      </main>
  )
}

export default App