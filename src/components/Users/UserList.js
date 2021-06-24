import UserDetails  from "./UserDetails";
import styles from './UserList.module.css';

const UserList = props => {
    return (
        <div className={styles.userlist}>
            <p> List of users </p>
            <ul>
                {props.users.map((user) => 
                    <UserDetails 
                    key={user.name}
                    name={user.name} 
                    age={user.age} />
                    )}
            </ul>
        </div>
    );
}

export default UserList;