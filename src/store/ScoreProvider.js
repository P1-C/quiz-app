import React, { useReducer } from 'react'
import ScoreContext from './ScoreContext';

const defaultScoreState = {
  wrongAttempts: [],
  isWrongAttemptVisible: false
}

const scoreReducer = (state, action) => {
  if (action.type === "ADD_WRONG") {
    const existingWrongAttemptIndex = state.wrongAttempts.findIndex(
      (wrongAttempt) => wrongAttempt.id === action.wrongAttempt.id
    )
    const existingWrongAttempt = state.wrongAttempts[existingWrongAttemptIndex]
    let updatedWrongAttempts
    if (existingWrongAttempt) {
      const updatedWrongAttempt = {
        ...existingWrongAttempt,
        selectedOption: action.wrongAttempt.selectedOption,
      };
      updatedWrongAttempts = [...state.wrongAttempts]
      updatedWrongAttempts[existingWrongAttempt] = updatedWrongAttempt
    } else {
      updatedWrongAttempts = state.wrongAttempts.concat(action.wrongAttempt)
    }
    return { wrongAttempts: updatedWrongAttempts }
  }
  if (action.type === 'REMOVE_WRONG') {
    let updatedWrongAttempts
    updatedWrongAttempts = state.wrongAttempts.filter((wrongAttempt) => {
      return wrongAttempt.id !== action.id
    })
    return { wrongAttempts: updatedWrongAttempts, isWrongAttemptVisible: state.isWrongAttemptVisible }
  }
  if (action.type === 'DISPLAY_WRONG') {
    return {
      ...state,
      isWrongAttemptVisible: true
    }

  }
  if (action.type === 'CLEAR_WRONG') {
    return {
      wrongAttempts: [],
      isWrongAttemptVisible: false
    }

  }
  return defaultScoreState
}

const ScoreProvider = (props) => {
  const [currentState, dispatchScoreAction] = useReducer(scoreReducer, defaultScoreState)
  const addWrongAttemptHandler = (item) => {
    // axios call
    //dispatch 
    dispatchScoreAction({ type: "ADD_WRONG", wrongAttempt: item })
  }
  const removeWrongAttemptHandler = (id) => {
    dispatchScoreAction({ type: "REMOVE_WRONG", id: id })
  }
  const displayWrongAttemptHandler = () => {
    dispatchScoreAction({ type: "DISPLAY_WRONG" })
  }
  const clearAllWrongAttempts = () => {
    dispatchScoreAction({ type: "CLEAR_WRONG" })
  }

  const scoreContext = {
    wrongAttempts: currentState.wrongAttempts,
    addWrongAttempt: addWrongAttemptHandler,
    removeWrongAttempt: removeWrongAttemptHandler,
    isWrongAttemptVisible: currentState.isWrongAttemptVisible,
    displayWrongAttempts: displayWrongAttemptHandler,
    clearAllWrongAttempts: clearAllWrongAttempts
  }
  return (
    <ScoreContext.Provider value={scoreContext}>{props.children}</ScoreContext.Provider>
  )
}

export default ScoreProvider