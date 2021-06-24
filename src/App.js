import React, {useState} from 'react';
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

const dummyUsers = [
  {name: 'AAA', age: 11},
  {name: 'BBB', age: 22}
]

function App() {
  
  const [users, setUsers] = useState(dummyUsers);
  const saveUserDataHandler = (userData) => {
    setUsers(prevState => {
      return [
      ...prevState,
      userData
      ]})
  }
  
  return (
    <div>
      <UserForm onSaveUserData={saveUserDataHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
