import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Context } from '../context'
import { addUsers } from '../store/userReduser';

const Loader = () => {
    const dispatch = useDispatch();
    const { setFileName } = useContext(Context);

    const [isOver, setIsOver] = useState(false);
    const [loading, setLoading] = useState(false);

    function onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setFileName(e.dataTransfer.files[0].name);

        const reader = new FileReader();
        reader.onloadend = () => {
            let response;
            try {
                response = JSON.parse(reader.result);
            } catch (error) {
                alert('Unable to read JSON file. Probably the file has a different format.');
                setLoading(false);
                return;
            }
            setLoading(false);
            const sortingUsers = extractUsers(response).sort();
            dispatch(addUsers(sortingUsers))
        };
        reader.readAsText(e.dataTransfer.files[0]);

        setLoading(true);
        setIsOver(false);
    }
    function extractUsers(reply) {
        let users = [];
        let checkReplyings = [];
        let newReplyings = [reply];
        do {
            checkReplyings = newReplyings;
            newReplyings = [];
            for (const replying of checkReplyings) {
                if (!users.find(user => user === replying.user))
                    if (replying.user)
                        users.push(replying.user);
                if (replying.replies)
                    for (const newReplying of replying.replies)
                        newReplyings.push(newReplying);
            }
        } while (newReplyings.length);
        return users;
    }

    return (
        <div className={
            ['drop-zone', 'drop-zone--' + (loading ? 'is-loading' : 'is-dropping'),
                (isOver ? 'drop-zone--is-over' : '')].join(' ')
        }
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setIsOver(true)}
            onDragLeave={() => setIsOver(false)}
        >
        </div>
    )
}

export default Loader
