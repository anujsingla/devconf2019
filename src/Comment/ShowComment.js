import React, {useContext} from 'react';
import { CommentContext } from './AppCommentWithUseContext';


export function ShowComment() {
    // const { comment } = props;
    const {state: {comment}}= useContext(CommentContext);
    return (
        <div className="card">
            <div className="card-header">
                Comments
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        comment && comment.map((messageItem) => {
                            const {id, text} = messageItem;
                            return <li key={id} className="list-group-item">{text}</li>
                        })
                     }
                </ul>
            </div>
        </div>
    )
}