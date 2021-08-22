import React, { useState } from 'react'
import './styles/App.css'
import { Context } from './context';
import Loader from './components/Loader';
import { useTypedSelector } from './hooks/useTypedSelector';
import UserList from './components/UserList';

function App() {
    const state = useTypedSelector(state => state.user)
    const [fileName, setFileName] = useState<String>("");

    return (

        <Context.Provider value={{
            setFileName
        }}>
            <div className="App">
                {state.usersExist
                    ? <div>
                        <p className="file-name">{fileName}</p>,
                        <UserList users={state.users} />
                    </div>
                    : <Loader />
                }
            </div>
        </Context.Provider>
    );
}

export default App;