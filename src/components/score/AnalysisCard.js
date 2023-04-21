import React, { useContext } from 'react'
import ScoreContext from '../../store/ScoreContext'
import classes from './AnalysisCard.module.css'

const AnalysisCard = (props) => {
  const scoreCtx = useContext(ScoreContext)
  const { question, id, option1, option2, option3, option4, correctOption, selectedOption } = props.questionDetails
  const deleteHandler = (id) => {
    scoreCtx.removeWrongAttempt(id)
  }
  const getClassName = (option) => {
    return option === props.questionDetails[correctOption] ? classes.incorrect : option === selectedOption && classes.correct
   }
  return (
    <div className={classes['analysis-card']} >
      <div className={classes.delete}>
        <h4>Que - {question} </h4>
        <span style={{ color: '#d25252',cursor:'pointer' }} onClick={deleteHandler.bind(null, id)} ><i class="material-icons" >delete</i>
        </span>
      </div>
      <div className={classes['option-container']}>
        <div>
          <span className={`${classes.options} ${getClassName(option1)}`}>
            A - {option1}
          </span>
        </div>
        <div>
          <span className={`${classes.options} ${getClassName(option2)}`}>
            B - {option2}
          </span>
        </div>
        <div>
          <span className={`${classes.options} ${getClassName(option3)}`}>
            C - {option3}
          </span>
        </div>
        <div>
          <span className={`${classes.options} ${getClassName(option4)}`}>
            D - {option4}
          </span>
        </div>
      </div>
    </div>
  )
}

export default AnalysisCard