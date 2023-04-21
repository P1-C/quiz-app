import React from 'react'
import './QuestionCount.css'

function QuestionCount(props) {
    const { currentCount , totalQuestion } = props
  return (
    <h4 className='question-count'><span className='count-box'>{currentCount} of {totalQuestion}</span></h4>
  )
}

export default QuestionCount