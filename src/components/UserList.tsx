import React from 'react'
import { FC } from 'react';
import UserItem from './UserItem';

interface UserListProps {
    users: string[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div className="user-list__wrapper">
            {users.length
                ? <ul className="user-list">
                    {
                        users.map((user, index) =>
                            <UserItem
                                key={user}
                                name={user}
                                even={index % 2 !== 0}
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
