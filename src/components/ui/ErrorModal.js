import React from 'react';
import Card from './Card';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const OverLay = (props) => {
    return <React.Fragment>
        <Card className={classes.modal}>
            <header className={classes.header} style={{background: props.type === undefined ? 'green' : '#a95151' }}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <h4>{props.message}</h4>
            </div>
            <footer className={classes.footer}>
                <button onClick={props.onConfirm}>Okay</button>
            </footer>
        </Card>
    </React.Fragment>
}
const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<OverLay type={props.type} title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ErrorModal