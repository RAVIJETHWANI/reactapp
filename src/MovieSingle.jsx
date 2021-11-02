import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './MovieContext'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const MovieSingle = () => {
  const {id}=useParams()
  const [loading,setLoading]=useState(true)
   const [error,setError]=useState({show:false,msg:""})
   const [movie,setMovie]=useState([])
  

   const fetchMovie=async(url)=>{
       setLoading(true)
       try{
        const response= await fetch(url)
        const data= await response.json()
        console.log(data)
        if(data.Response==='True'){
            setMovie(data)
            setError({show:false,msg:''})
        }else{
            setError({show:true,msg: data.Error})
        }
        setLoading(false)
       }catch(error){
           console.log(error)
           setLoading(false)
       }
   }
   useEffect(()=>{
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
   },[id])
   
   if(loading){
     return <div className="loading"></div>
   }
   if(Error.show){
     return(
       <div className="page error">
         <h1>{Error.msg}</h1>
         <Link to="/" className="btn">
           Back to home
         </Link>
       </div>
     )
   }
   const {Poster,Title,Year,Plot}=movie
  return (
    <section className="single-movie">
    <img src={Poster==="N/A"?url:Poster} alt={Title} />
    <div className=' single-movie-info'>
      <h2 className="title">{Title}</h2>
      <p>{Plot}</p>
      <h4>{Year}</h4>
      <Link to="/" className="btn">
           Back to home
         </Link>
    </div>
  </section>
  )
}

export default MovieSingle