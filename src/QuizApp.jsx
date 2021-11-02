import React from 'react'
import { useGlobalContext } from './QuizContext'

import SetupForm from './QuizForm'
import Loading from './QuizLoading'
import Modal from './QuizModal'

function QuizApp() {
    const {waiting,loading,index,correct,questions,nextQuestion,checkAnswer,isModal}=useGlobalContext()
    if(waiting){
        return <SetupForm />
    }
    if(loading){
        return <Loading />
    }
    
    const {question,incorrect_answers,correct_answer}=questions[index]
   // const answers=[...incorrect_answers,correct_answer]
   let answers =[...incorrect_answers]
    
   let tempIndex= Math.floor(Math.random()*4)
   console.log(tempIndex)
   if(tempIndex===3){
       answers.push(correct_answer)
   }else{

     const val=  answers.push(answers[tempIndex])
       answers[tempIndex]=correct_answer
   }
  
    return(
        <main>
          <Modal />
            <section className="quiz">
                <p className="correct-answers">
                
                    correct answers: {correct}/ {isModal?questions.length:index}
               
                </p>
               
                <article className="container">
                    <h2 dangerouslySetInnerHTML={{__html:question}} />
                    <div className="btn-container">
                        {answers.map((answer,index)=>{
                            return <button key={index} onClick={()=>checkAnswer(correct_answer===answer)} className="answer-btn" dangerouslySetInnerHTML={{__html:answer}} />
                        })}
                    </div>
                </article>
                <button className="next-question" onClick={nextQuestion}>next question</button>
            </section>
        </main>
    )
}

export default QuizApp
