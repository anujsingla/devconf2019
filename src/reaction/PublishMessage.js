import React, {useState, useRef, useContext } from 'react';
import {newMessage} from './actions';
import { CommentContext } from './AppCommentWithUseContext';

export function PublishMessage() {
    // const {dispatch} = props;
    const {dispatch}= useContext(CommentContext);
    const [text, setText] = useState('');
    const textInput = useRef();

    const updateText = () => {
        setText(textInput.current.value);
    }

    const publishMessage = () => {
        dispatch(newMessage(text));
    }

    return (
        <div className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <input className="form-control form-control-sm" value={text} type="text" ref={textInput} onChange={updateText} />
            </div>
            <button className="btn btn-primary mb-2" onClick={publishMessage}>Add Comment</button>
        </div>
      );
}