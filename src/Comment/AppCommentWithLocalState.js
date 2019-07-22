import React, { useState } from 'react';

export function AppCommentWithLocalState() {
    const [comment, setComment] = useState([]);
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
    }

    const publishComment = () => {
        comment && setComment([...comment, text]);
    }

    const deleteComment = (text) => {
        comment && setComment(comment.filter(c => c !== text));
    }

    return (
        <div>
            <div className="form-group mx-sm-3 mb-2">
                <input className="form-control form-control-sm" value={text} type="text" onChange={updateText} />
            </div>
            <button className="btn btn-primary mb-2" onClick={publishComment}>Add Comment</button>
            <hr />
            <div className="card">
            <div className="card-header">
                Comments
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {comment && comment.map((cc, index) => {
                        return (
                        <li key={index} className="list-group-item">
                        {cc}
                        <button className="ml-4 btn btn-primary" onClick={() => deleteComment(cc)}>Delete Comment</button>
                        </li>
                        )
                    })
                  }
                </ul>
            </div>
        </div>
        </div>
      );

}