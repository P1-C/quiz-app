import React from 'react'

const ScoreContext = React.createContext({
    wrongAttempts: [],
    isWrongAttemptVisible: false,
    addWrongAttempt: (item)=>{},
    removeWrongAttempt: (id)=>{},
    displayWrongAttempts: ()=>{},
    clearAllWrongAttempts: ()=>{},
})

export default ScoreContext