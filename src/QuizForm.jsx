import React from 'react'
import { useGlobalContext } from './QuizContext'

const SetupForm = () => {
    const {quiz,handleChange,handleSubmit,error}=useGlobalContext()
  return (
      <>
        <section className="quiz quiz-small">
            <form className="setup-form">
            <h2>setup quiz</h2>
                <div className="form-control">
                    <label htmlFor="amount">numbers of questions</label>
                    <input type="number" min={1} max={50} className="form-input" name="amount" value={quiz.amount} onChange={handleChange} id="amount" />
                </div>
                <div className="form-control">
                    <label htmlFor="category">category</label>
                    <select  className="form-input" name="category" value={quiz.category} onChange={handleChange} id="category">
                        <option value="sports">sports</option>
                        <option value="history">history</option>
                        <option value="politics">politics</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="difficulty">select difficulty</label>
                    <select  className="form-input" name="difficulty" value={quiz.difficulty} onChange={handleChange} id="difficulty">
                        <option value="east">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                </div>
                {error && <p className="error">cant generate questions,please try different option</p>}
                <button type="submit" className="submit-btn" onClick={handleSubmit}>start</button>
            </form>
        </section>
      </>
  )
}

export default SetupForm