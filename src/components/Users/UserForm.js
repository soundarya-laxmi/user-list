import React, {useState} from 'react';
import Button from '../UI/Button';
import styles from './UserForm.module.css';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isAgeValid, setIsAgeValid] = useState(true);
    const [error, setError] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        if(event.target.value.trim().length > 0){
            setIsNameValid(true);
        }
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        if(event.target.value.trim().length > 0){
            setIsAgeValid(true);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (enteredName.trim().length === 0 && enteredAge.trim().length === 0 && +enteredAge < 1){
            setIsNameValid(false);
            setIsAgeValid(false);
            setError({
                errorTitle: "Invalid Input",
                errorMessage: "Please enter valid name and age (non empty values)"
            })
            return;
        }


        if (enteredName.trim().length === 0 && enteredAge.trim().length > 0){
            setIsNameValid(false);
            setError({
                errorTitle: "Invalid Name",
                errorMessage: "Please enter valid name (non empty values)"
            })
            return;
        }

        if (enteredName.trim().length > 0 && enteredAge.trim().length === 0 && +enteredAge < 1){
            setIsAgeValid(false);
            setError({
                errorTitle: "Invalid Age",
                errorMessage: "Please enter valid age (non empty and non negative values)"
            })
            return;
        }

        const enteredData = {name: enteredName, age: enteredAge}
        props.onSaveUserData(enteredData);

        setEnteredName('');
        setEnteredAge('');
    }

    const errorDismissHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} dismiss={errorDismissHandler} />}
            <form onSubmit={submitHandler}>
                <div className={styles.formcontrol}>
                    <div>
                        <div className={`${styles['namecontrol']} ${!isNameValid && styles.invalid }`}>
                            <label> Name </label>
                            <input type="text" value={enteredName} onChange={nameChangeHandler}/>
                        </div>
                        <div className={`${styles['agecontrol']} ${!isAgeValid && styles.invalid }`}>
                            <label> Age </label>
                            <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
                        </div>
                    </div>
                <Button type="submit">Add User</Button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;