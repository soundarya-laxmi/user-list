import Card from '../UI/Card';
import styles from './UserDetails.module.css';

const UserDetails = props => {
    return (
        <Card className={styles.userdetail}>
            <div> {props.name} ({props.age} years old) </div>
        </Card>
    );
}

export default UserDetails;