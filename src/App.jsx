import React, { useState } from 'react'
import styles from './styles/App.css'
import { Context } from './context';
import UserList from './components/UserList';
import Loader from './components/Loader.jsx';
import { useSelector } from 'react-redux';

function App() {
    const state = useSelector(state => state);
    const [fileName, setFileName] = useState("");

    return (
        <Context.Provider value={{
            setFileName
        }}>
            <div className="App" style={styles}>
                {state.usersExist
                    ? <div>
                        <p className="fileName">{fileName}</p>,
                        <UserList users={state.users} />
                    </div>
                    : <Loader />
                }
            </div>
        </Context.Provider>
    );
}

export default App;
