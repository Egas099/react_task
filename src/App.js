import React, { useState } from 'react'
import Loader from 'components/loader'
import UsersList from 'components/usersList'
import styles from 'main.css'
import { Context } from 'context'

function App() {
  const [users, setUsers] = useState([]);
  const [usersExist, setUsetsExist] = useState(false);
  const [fileName, setFileName] = useState("");

  const importUsers = users => {
    setUsers(users);
    setUsetsExist(true);
  }
  const removeUser = index => {
    setUsers(users.filter(user => {
      return users.indexOf(user) !== index;
    }));
  }
  return (
    <Context.Provider value={{
      removeUser, importUsers, setFileName
    }}>
      <div className="App" style={styles}>
        {
          function () {
            if (usersExist) {
              return [
                <p key="fileName" className="fileName">{fileName}</p>,
                <UsersList key="userList" users={users} />
              ];
            } else {
              return <Loader />;
            }
          }()
        }
      </div>
    </Context.Provider>
  );
}

export default App;
