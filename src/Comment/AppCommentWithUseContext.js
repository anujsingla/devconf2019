import React, { useReducer } from 'react';
import reducer, {initialState} from './reducer';
import { PublishMessage } from './PublishMessage';
import { MessageBoard } from './MessageBoard';

// here we can pass default value to the context
export const CommentContext = React.createContext();

export function AppCommentWithUseContext() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <CommentContext.Provider value={{state, dispatch}}>
            <div>
                <h2>User Comment</h2>
                <hr/>
                <PublishMessage />
                <hr/>
                <MessageBoard />
            </div>
        </CommentContext.Provider>
    )
}