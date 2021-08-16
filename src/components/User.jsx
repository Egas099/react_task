import React, { useContext } from 'react'
import { Context } from '../context'

const User = ({ index, name }) => {
    const { removeUser } = useContext(Context)

    return (
        <li className={"user " + (index % 2 ? "is-colored" : "")}>
            <span>
                {name}
            </span>
            <span className="delete" onClick={() => removeUser(index)}></span>
        </li>
    )
}

export default User
