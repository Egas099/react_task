import React from 'react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userReduser'

interface UserItemProps {
    name: string;
    even: boolean;
}

const UserItem: FC<UserItemProps> = ({ name, even }) => {
    const dispath = useDispatch()

    return (
        <li className={"user " + (even && "user--is-colored")}>
            <span>
                {name}
            </span>
            <span className="delete" onClick={() => dispath(removeUser(name))}></span>
        </li>
    )
}

export default UserItem
