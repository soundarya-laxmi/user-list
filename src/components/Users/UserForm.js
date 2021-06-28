import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import styles from './UserForm.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const UserForm = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                errorTitle: "Invalid Input",
                errorMessage: "Please enter valid name and age (non empty values)"
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
              errorTitle: 'Invalid age',
              errorMessage: 'Please enter a valid age (> 0).',
            });
            return;
          }

        const enteredData = {name: enteredName, age: enteredAge}
        props.onSaveUserData(enteredData);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorDismissHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} dismiss={errorDismissHandler} />}
            <form onSubmit={submitHandler}>
                <div className={styles.formcontrol}>
                    <div>
                        <div className={styles.namecontrol}>
                            <label> Name </label>
                            <input type="text" 
                                   ref={nameInputRef} />
                        </div>
                        <div className={styles.agecontrol}>
                            <label> Age </label>
                            <input type="number" 
                                   ref={ageInputRef} />
                        </div>
                    </div>
                <Button type="submit">Add User</Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default UserForm;