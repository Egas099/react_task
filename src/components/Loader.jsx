import React, { useState, useContext } from 'react'
import { Context } from '../context'

const Loader = () => {
    const { importUsers, setFileName } = useContext(Context);

    const [isOver, setIsOver] = useState(false);
    const [loading, setLoading] = useState(false);

    function onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setFileName(e.dataTransfer.files[0].name);

        const reader = new FileReader();
        reader.onloadend = () => {
            let res;
            try {
                res = JSON.parse(reader.result);
            } catch (error) {
                alert("Unable to read JSON file. Probably the file has a different format.");
                setLoading(false);
                return;
            }
            setLoading(false);
            const sortingUsers = extract(res, []).sort();
            importUsers(sortingUsers);
        };
        reader.readAsText(e.dataTransfer.files[0]);

        setLoading(true);
        setIsOver(false);
    }
    function extract(reply, users) {
        if (!users.find(user => user === reply.user))
            if (reply.user)
                users.push(reply.user);

        if (reply.replies)
            for (let i = 0; i < reply.replies.length; i++)
                users = extract(reply.replies[i], users);

        return users;
    }
    return (
        <div>
            <div className={(loading ? "loading" : "dropping") + " dropZone " + (isOver ? "over" : "")}
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => { setIsOver(true) }}
                onDragLeave={() => { setIsOver(false) }}
            >
            </div>
        </div>
    )
}

export default Loader
