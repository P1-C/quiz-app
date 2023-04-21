import React, { useContext } from 'react'
import ScoreContext from '../../store/ScoreContext'
import './QuestionCard.css'
import QuestionCount from './QuestionCount'

function QuestionCard(props) {
  const scoreCtx = useContext(ScoreContext)
  const { question, option1, option2, option3, option4 } = props.questionSet

  const choiceHandler = (event) => {
    const selectedOption = event.target.value
    const correctOption = props.questionSet[props.questionSet.correctOption]

    if (selectedOption === correctOption) {
      scoreCtx.removeWrongAttempt(props.questionSet.id)
    } else if (selectedOption !== correctOption) (
      scoreCtx.addWrongAttempt({
        ...props.questionSet,
        selectedOption: selectedOption
      })
    )
  }
  return (
    <form >
      <div className='question-card' >
        <div>
          <h4>Que - {question}</h4>
        </div>
        <div className='options'>
          <input type="radio" id={option1} name={question} value={option1} onClick={choiceHandler} />
          <label htmlFor={option1}>{option1}</label>
        </div>
        <div className='options'>
          <input type="radio" id={option2} name={question} value={option2} onClick={choiceHandler} />
          <label htmlFor={option2}>{option2}</label>
        </div>
        <div className='options'>
          <input type="radio" id={option3} name={question} value={option3} onClick={choiceHandler} />
          <label htmlFor={option3}>{option3}</label>
        </div>
        <div className='options'>
          <input type="radio" id={option4} name={question} value={option4} onClick={choiceHandler} />
          <label htmlFor={option4}>{option4}</label>
        </div>
        <div>
          <QuestionCount totalQuestion={props.totalQuestionCount} currentCount={props.currentCount} />
        </div>
      </div>
    </form>
  )
}

export default QuestionCard