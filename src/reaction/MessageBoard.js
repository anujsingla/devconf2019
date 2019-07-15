import React, {useContext} from 'react';
import { CommentContext } from './AppCommentWithUseContext';


export function MessageBoard() {
    // const { messages } = props;
    const {state: {messages}}= useContext(CommentContext);
    return (
        <div className="card">
            <div className="card-header">
                Comments
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        messages && messages.map((messageItem) => {
                            const {id, text} = messageItem;
                            return <li key={id} className="list-group-item">{text}</li>
                        })
                     }
                </ul>
            </div>
        </div>
    )
}