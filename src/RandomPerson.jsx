import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function RandomPerson() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState("name")
  const [value, setValue] = useState("person")

  const getPerson=async()=>{
    const response= await fetch(url)
    const data= await response.json()

    const newperson= data.results[0]
    const {email,phone}=newperson
    const {large:image}=newperson.picture
    const {login:{password}}=newperson
    const{first,last}=newperson.name
    const {dob:{age}}=newperson
    const {street:{number,name}}=newperson.location

    const mainPerson={
      image,
      phone,
      email,
      password,
      age,
      street:`${number} ${name}`,
      name: `${first} ${last}`
    }
    setPerson(mainPerson)
    setLoading(false)
    setTitle("name")
    setValue(mainPerson.name)
  }
  useEffect(()=>{
    getPerson()
  },[])

  const hamdle=(e)=>{
   if(e.target.classList.contains('icon')){
     const newValue = e.target.dataset.label
     setTitle(newValue)
     setValue(person[newValue])
   }
  }
  return(
    <main>
    <div className="block bcg-black"></div>
        <div className="block">
          <div className="container">
            <img src={ (person && person.image) || defaultImage } alt="user-img" className="user-img" />
            <p className="user-title">my {title} is </p>
            <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={hamdle}><FaUser /></button>
            <button className="icon" data-label="email" onMouseOver={hamdle}><FaEnvelopeOpen /></button>
            <button className="icon" data-label="age" onMouseOver={hamdle}><FaCalendarTimes /></button>
            <button className="icon" data-label="street" onMouseOver={hamdle}><FaMap /></button>
            <button className="icon" data-label="phone" onMouseOver={hamdle}><FaPhone /></button>
            <button className="icon" data-label="password" onMouseOver={hamdle}><FaLock /></button>

          </div>
          <button className="btn" type="button" onClick={getPerson}>{loading?"loading...":"random user"}</button>
          </div>
        </div>
    </main>
)
  
   
 
} 

export default RandomPerson