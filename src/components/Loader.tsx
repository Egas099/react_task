import React, { useState, useContext, FC } from 'react'
import { useDispatch } from 'react-redux';
import { Context } from '../context'
import { addUsers } from '../store/userReduser';
import { Replying } from '../types/replying';

const Loader: FC = () => {
    const dispatch = useDispatch();
    const { setFileName } = useContext(Context);

    const [isOver, setIsOver] = useState(false);
    const [loading, setLoading] = useState(false);

    function onDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setFileName(e.dataTransfer.files[0].name);

        const reader = new FileReader();
        reader.onloadend = () => {
            let response: any = '';
            try {
                response = reader.result;
                if (typeof response === 'string')
                    response = JSON.parse(response);
                else {
                    alert('Unable to read the file');
                    setLoading(false);
                    return;
                }

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
    function extractUsers(reply: Replying): string[] {
        let users: string[] = [];
        let checkReplyings: Replying[] = [];
        let newReplyings: Replying[] = [reply];
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
