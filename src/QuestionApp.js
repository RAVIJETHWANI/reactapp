import React, { useState } from "react";
import questionData from "./QuestionData";
import Question from "./Question";
const QuestionApp = ()=>{
    const [question,setQuestoin]=useState(questionData)
  

    return (
        <main>
            <div className="container">
                <h3>Question & Answer</h3>
           
            <section className="info">
                
                {
                    question.map((newques)=>{
                        const {id,title,info}=newques
                        return <Question key={id} {...newques} />
                    })
                }
            </section>
            </div>
        </main>
    )
}

export default QuestionApp