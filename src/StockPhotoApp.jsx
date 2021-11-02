import { getSuggestedQuery } from '@testing-library/dom'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './StockPhoto'
 //const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function StockPhotoApp() {
  const [loading,setLoading]=useState(false)
  const [photo,setPhoto]=useState([])

  const [query,setQuery]=useState('')
  const [page,setpage]=useState(1)
  const fetchImages=async()=>{
    setLoading(true)
    let url;
    let urlpage=`&page=${page}`
    let urlQuery=`&query=${query}`
   
    if(query){
      url =`${searchUrl}?client_id=Y72vQzTvINaj7Qxs10lfqgG1UJlTMrvPWr_HzkISR-8${urlpage}${urlQuery}`
    }else{
      url =`${mainUrl}?client_id=Y72vQzTvINaj7Qxs10lfqgG1UJlTMrvPWr_HzkISR-8${urlpage}`
    }
    try{
      const response= await fetch(url)
      const data = await response.json()
      console.log(data)
      setPhoto((oldPhoto)=>{
        if(query && page===1){
          return data.results
        }
        else if(query){
          return [...oldPhoto, ...data.results]
        }{
          return [...oldPhoto, ...data]
        }
       
      })
      setLoading(false)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchImages()
  },[page])
  const handleSubmit=(e)=>{
    e.preventDefault()
    setpage(1)
    fetchImages()
  }
  useEffect(()=>{
    const event= window.addEventListener('scroll',()=>{
      if(!loading && window.innerHeight+window.scrollY>=document.body.scrollHeight-2){
        setpage((oldPage)=>{
          return oldPage+1
        })
      }
      
    })
    return()=>window.removeEventListener('scroll',event)
  },[])
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" value={query} onChange={(e)=>setQuery(e.target.value)} />
          <button className="submit-btn" type="button" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photo.map((image,index)=>{
             return <Photo key={index} {...image} />
          })}
        </div>
          {loading && <h1 className="loading">loading...</h1>}
      </section>
    </main>
  )
}

export default StockPhotoApp