import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.dismiss}>
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
                        <Button onClick={props.dismiss}>
                            Okay
                        </Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
}

export default ErrorModal;