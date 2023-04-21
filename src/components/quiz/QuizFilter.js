import React from 'react'
import './QuizFilter.css'

function QuizFilter(props) {
  return (
    <div className='quiz-filter'>
        <div><h4>Filter by category</h4></div>
        <div> 
            <select value={props.selectedCategory} onChange={props.onCategoryChange}>
                <option value='' disabled default>Select Category</option>
                {
                    props.categories.map(category=>{
                        return <option key={category.id} value={category.categoryName}>{category.categoryName}</option>
                    })
                }
            </select>
        </div>

    </div>
  )
}

export default QuizFilter