import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [waiting,setWaiting]=useState(true)
    const [loading,setLoading]=useState(false)
    const [questions,setQuestions]=useState([])
    const [index,setIndex]=useState(0)
    const [correct,setCorrect]=useState(0)
    const [error,setError]=useState(false)
    const [isModal,setIsModal]=useState(false)
    const [quiz,setQuiz]=useState({
        amount:10,
        category:'sports',
        difficulty:'easy'
    })
    const fetchQuestion=async(url)=>{
        setLoading(true)
        setWaiting(false)
        const response= await axios(url).catch((err)=>console.log(err))
        
        if(response){
            const data= response.data.results
            
            if(data.length>0){
                setQuestions(data)
                setLoading(false)
                setWaiting(false)
                setError(false)
            }else{
                setWaiting(true)
                setError(true)
            }

        }else{
            setWaiting(true)
        }
    }
    
    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        console.log(name,value)
        setQuiz((oldvalue)=>{
            return {...oldvalue,[name]:value}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const {amount,category,difficulty}=quiz
        const tempUrl='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
        const url =`${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
        
        fetchQuestion(url)
    }

    const nextQuestion=()=>{
        setIndex((oldindex)=>{
            let index=oldindex+1
            
            if(index>questions.length-1){
                
                openModal()
                return 0
                
            }else{
                return index
            }
            
        })
       
    }
    const checkAnswer=(value)=>{
        if(value){
            setCorrect((oldstate)=>{
                return oldstate+1
            })
        }
        nextQuestion()
    }
    const openModal=()=>{
        setIsModal(true)
    }
    const closeModal=()=>{
        setWaiting(true)
        setCorrect(0)
        setIsModal(false)
    }
  return <AppContext.Provider value={{waiting,loading,questions,error,quiz,handleChange,handleSubmit,index,correct,isModal,nextQuestion,checkAnswer,closeModal}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider,AppContext}