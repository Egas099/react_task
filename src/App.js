import React, { useState } from 'react'
import styles from './styles/App.css'
import { Context } from './context';
import UserList from './components/UserList';
import Loader from './components/Loader.jsx';

function App() {
    const [users, setUsers] = useState([]);
    const [usersExist, setUsetsExist] = useState(false);
    const [fileName, setFileName] = useState("");

    const importUsers = users => {
        setUsers(users);
        setUsetsExist(true);
    }
    const removeUser = index => {
        setUsers(users.filter((user, i) => i !== index));
    }
    return (
        <Context.Provider value={{
            removeUser, importUsers, setFileName
        }}>
            <div className="App" style={styles}>
                {usersExist
                    ? <div>
                        <p className="fileName">{fileName}</p>,
                        <UserList users={users} />
                    </div>
                    : <Loader />
                }
            </div>
        </Context.Provider>
    );
}

export default App;
