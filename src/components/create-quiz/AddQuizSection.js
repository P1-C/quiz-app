import React, { useState } from 'react'
import QuestionForm from './QuestionForm'
import './AddQuizSection.css'

function AddQuizSection(props) {
  const [isEditable, setIsEditable] = useState(false)
  const enableEditingHandler = () => setIsEditable(true)
  const disableEditingHandler = () => setIsEditable(false)

  return (
    <div className='add-quiz-section'>
      {
        !isEditable && <button onClick={enableEditingHandler}>ADD NEW QUESTION</button>
      }
      {
        isEditable && (
          <>
            <h2>Create Question</h2>
            <hr />
            <QuestionForm onSaveFormData={props.onAddQuestion} onCancel={disableEditingHandler} />
          </>
        )
      }
    </div>
  )
}

export default AddQuizSection