import React, { useState } from 'react'
import './QuestionForm.css'

const intialFormData = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctOption: '',
    category: '',
}
function QuestionForm(props) {
    const [formData, setFormData] = useState(intialFormData)
    const formDataHandler = (event) => {
        if(event.target.name.trim().length > 0){
            removeErrorClass(event.target.name)
        }
        const { name, value } = event.target
        setFormData((prevState) => {
            return { ...prevState, [name]: value }
        })
    }
    const addErrorClass = (propertyName) => { 
        document.getElementById(`${propertyName}`).classList.add('error')
    }
    const removeErrorClass = (propertyName) => { 
        document.getElementById(`${propertyName}`).classList.remove('error')
     }
    const validateForm = () => {
        let isValid = true
        for ( var property in formData ) {
            if(formData[property].trim().length === 0){
                addErrorClass(property)
                isValid = false
            }
          }
        return isValid
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(validateForm()){
            props.onSaveFormData(formData)
            setFormData(intialFormData)
            props.onCancel()
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='question-form-controls'>
                <div className='question-form-control'>
                    <label>
                        <h4 style={{ display: 'block' }}>Question</h4>
                        <textarea placeholder='Enter question' id="question" name="question" rows="3" cols="99" value={formData.question} onChange={formDataHandler}/>
                    </label>
                </div>
                <div className='question-form-control'>
                    <label><h4>Option - (A)</h4></label>
                    <input type='text'  placeholder='Enter option A' id='option1' name='option1' value={formData.option1} onChange={formDataHandler} />
                </div>
                <div className='question-form-control'>
                    <label><h4>Option - (B)</h4></label>
                    <input type='text' placeholder='Enter option B' id='option2' name='option2' value={formData.option2} onChange={formDataHandler}/>
                </div>
                <div className='question-form-control'>
                    <label><h4>Option - (C)</h4></label>
                    <input type='text' placeholder='Enter option C' id='option3' name='option3' value={formData.option3} onChange={formDataHandler}/>
                </div>
                <div className='question-form-control'>
                    <label><h4>Option - (D)</h4></label>
                    <input type='text' placeholder='Enter option D' id='option4' name='option4' value={formData.option4} onChange={formDataHandler}/>
                </div>
                <div className='question-form-control'>
                    <div>
                        <label>
                            <h4>Category:</h4>
                        </label>
                        <select name='category' id='category' value={formData.category} onChange={formDataHandler}>
                            <option value="" default disabled>Please Select</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="ReactJS">ReactJS</option>
                        </select>
                    </div>
                    <div>
                        <label>
                            <h4>Correct Option:</h4>
                        </label>
                        <select name='correctOption' id='correctOption' value={formData.correctOption} onChange={formDataHandler}>
                            <option value="" default disabled>Please Select</option>
                            <option value="option1">Option (A)</option>
                            <option value="option2">Option (B)</option>
                            <option value="option3">Option (C)</option>
                            <option value="option4">Option (D)</option>
                        </select>
                    </div>
                </div>
                <div className='question-form-control'>
                    <div>
                        <button type="submit" >ADD</button>
                        <button type="button" onClick={props.onCancel} >CANCEL</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default QuestionForm