import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userReduser'

const User = ({ name, even }) => {
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

export default User
