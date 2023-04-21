import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ScoreModal.module.css';

const portalElement = document.getElementById('overlays')

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose} />
    )
}

const ScoreModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const ScoreModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onCloseScoreModal}/>, portalElement)}
            {ReactDOM.createPortal(<ScoreModalOverlay>{props.children}</ScoreModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default ScoreModal