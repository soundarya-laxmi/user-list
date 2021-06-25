import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import React from 'react';
import ReactDOM from 'react-dom';

const BackDrop = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}></div>
    )
}

const OverLay = props => {
    return(
        <Card className={styles.modal}>
            <header>
                <h2 className={styles.header}>
                    {props.errorTitle}
                </h2>
            </header>
            <div className={styles.content}>
                <p>
                    {props.errorMessage}
                </p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClick}>
                    Okay
                </Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClick={props.dismiss} />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <OverLay errorTitle={props.errorTitle} errorMessage={props.errorMessage} onClick={props.dismiss}/>, 
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
}

export default ErrorModal;