import React from 'react'
import './TotalQuestion.css'

function TotalQuestion(props) {
    const { totalQuestionCount } = props
  return (
    <h4>Total Question - {totalQuestionCount}</h4>
  )
}

export default TotalQuestion