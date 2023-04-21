import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import AuthContext from '../../store/AuthContext';
import ScoreContext from '../../store/ScoreContext';
import AddQuizSection from '../create-quiz/AddQuizSection';
import QuestionCard from '../quiz/QuestionCard';
import QuizFilter from '../quiz/QuizFilter';
import QuizTimer from '../quiz/QuizTimer';
import TotalQuestion from '../quiz/TotalQuestion';
import { useSelector } from 'react-redux/es/exports'

function Dashboard() {
  const { questionList } = useSelector((state)=>state.questionList)
  const scoreCtx = useContext(ScoreContext)
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const isQuizMode = history.location.pathname !== '/create_quiz'
  const user = authCtx.user
  const [questions, setQuestions] = useState(questionList)
  const [selectedCategory, setSelectedCategory] = useState('')
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  const addQuestionHandler = (questionData) => {
    setQuestions((prevQuestions) => [questionData, ...prevQuestions])
  }
  let categories = [
    { id: 1, categoryName: 'HTML' },
    { id: 2, categoryName: 'CSS' },
    { id: 3, categoryName: 'JavaScript' },
    { id: 4, categoryName: 'React' },
  ]
  const filteredQuestions = questions.filter(question => {
    if (selectedCategory) {
      return question.category === selectedCategory
    } else {
      return question
    }
  })
  const submitButtonHandler = () => {
    scoreCtx.displayWrongAttempts()
  }
  let currentQuestionCount = 0
  return (
    <div className='quiz-content'>
      {(user.role === 'Trainer' && !isQuizMode) &&
        <div className='quiz-title'>
          <AddQuizSection onAddQuestion={addQuestionHandler} />
        </div>
      }
      <div className='quiz-section'>
        <div className='total-question-and-timer-section'>
          {
            isQuizMode && (<><TotalQuestion totalQuestionCount={filteredQuestions.length} /><QuizTimer /></>)
          }
        </div>
        <QuizFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} categories={categories} />
        {
          filteredQuestions.length === 0 ?
            (<h4 className='no-records'>Oops !! No questions found for {selectedCategory}</h4>) :
            <React.Fragment>
              {filteredQuestions.map((question, index) => {
                currentQuestionCount++
                return <div key={index}><QuestionCard questionSet={question} totalQuestionCount={filteredQuestions.length} currentCount={currentQuestionCount} /><hr /></div>
              })}
              {
                isQuizMode && <button className='submit_button' onClick={submitButtonHandler}>Submit</button>
              }
            </React.Fragment>
        }
      </div>
    </div>
  );
}

export default Dashboard;
