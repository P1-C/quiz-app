import React, { useContext } from 'react'
import ScoreContext from '../../store/ScoreContext'
import ScoreModal from '../ui/ScoreModal'
import AnalysisCard from './AnalysisCard'
import classes from './ScoreListModal.module.css'

const ScoreListModal = (props) => {
    const scoreCtx = useContext(ScoreContext)

    const SuccessMessage = () => {
        return <div className={classes.success}>
            <h2>Congratulations !!</h2>
            <h4>You have no wrong attempts.</h4>
            <h4>All the very best</h4>
        </div>
    }
    const clearAllHandler = () => { 
        scoreCtx.clearAllWrongAttempts()
     }
    const Actions = () => {
        return <div className={classes.actions} >
            <button onClick={props.onCloseScoreModal}>Close</button>
            { scoreCtx.wrongAttempts.length !== 0 && <button onClick={clearAllHandler}>Clear all</button>}
        </div>
    }
    const WrongAttemptList = () => {
        return scoreCtx.wrongAttempts.map(question=>{
            return <React.Fragment key={question.id}><AnalysisCard  questionDetails={question} /><hr></hr></React.Fragment>

        })
    }

    return (
        <ScoreModal onCloseScoreModal={props.onCloseScoreModal}>
            <div className={classes['analysis-card-section']}>
            {scoreCtx.wrongAttempts.length === 0 && <SuccessMessage />}
            {scoreCtx.wrongAttempts.length > 0 && <WrongAttemptList />}
            </div>
            <Actions />
        </ScoreModal>
    )
}

export default ScoreListModal