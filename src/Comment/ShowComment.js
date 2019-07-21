import React, {useContext} from 'react';
import { CommentContext } from './AppCommentWithUseContext';
import { deleteMessage } from './reducer';


export function ShowComment() {
    // const { comment } = props;
    const {state: {comment}, dispatch}= useContext(CommentContext);
    const deleteComment = (text, id) => {
        dispatch(deleteMessage(text, id));
    }
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
                            return (
                            <li key={id} className="list-group-item">
                            {text}
                            <button className="ml-4 btn btn-primary" onClick={() => deleteComment(text, id)}>Delete Comment</button>
                            </li>
                            )
                        })
                     }
                </ul>
            </div>
        </div>
    )
}