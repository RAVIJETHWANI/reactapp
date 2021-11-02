import React, { useState, useContext, useEffect } from 'react'
// make sure to use https acc15b3d Y72vQzTvINaj7Qxs10lfqgG1UJlTMrvPWr_HzkISR-8
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=acc15b3d`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
   const [loading,setLoading]=useState(true)
   const [error,setError]=useState({show:false,msg:""})
   const [movie,setMovie]=useState([])
   const [query,setQuery]=useState('batman')

   const fetchMovie=async(url)=>{
       setLoading(true)
       try{
        const response= await fetch(url)
        const data= await response.json()
        console.log(data)
        if(data.Response==='True'){
            setMovie(data.Search)
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
    fetchMovie(`${API_ENDPOINT}&s=${query}`)
   },[query])
  return (
    <AppContext.Provider value={{ loading, error, movie, query, setQuery }}>
    {children}
  </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }