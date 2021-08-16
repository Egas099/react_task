import React from 'react'
import User from './User.jsx';

const UserList = ({ users }) => {
    return (
        <div className="user-list__wrapper">
            {users.length
                ? <ul className="user-list">
                    {
                        users.map((user, index) =>
                            <User
                                key={index}
                                index={index}
                                name={user}
                            />
                        )
                    }
                </ul>
                : <h4 style={{ textAlign: "center" }}>Empty</h4>
            }
        </div>
    )
}

export default UserList
