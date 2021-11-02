import React, { useState, useEffect } from 'react'
import data from './DarkModeData'
import Article from './DarkModeArticle'
const getLocalStorage =()=>{
    let newtheme = ('light-theme')
    if(localStorage.getItem('theme')){
        newtheme= (localStorage.getItem('theme'))
    }
    return newtheme
    
    

}
function App() {
const [theme,setTheme]=useState(getLocalStorage())
//const [toggle,setToggle]=useState(false)

useEffect(()=>{
document.documentElement.classList=theme
},[theme])
const handle=()=>{
  if(theme==="light-theme"){
      setTheme("dark-theme")
  }else{
      setTheme('light-theme')
  }
}
useEffect(()=>{
    localStorage.setItem('theme',(theme))
},[theme])
  return (
      <main>
          <nav>
              <div className="nav-center">
                  <h1>overreacted</h1>
                  <button className="btn" onClick={handle}>toggle</button>
              </div>
          </nav>
          <section className="articles">
              {data.map((item,index)=>{
                  return <Article key={index} {...item}/>
              })}
          </section>
      </main>
  )
}

export default App