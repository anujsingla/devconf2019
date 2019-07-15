import React, {useReducer} from 'react';
import reducer, {initialState} from './reducer';
import { PublishMessage } from './PublishMessage';
import { MessageBoard } from './MessageBoard';

export function AppComment() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <div>
            <h2>User Comment</h2>
            <hr/>
            <PublishMessage dispatch={dispatch} />
            <hr/>
            <MessageBoard messages={state.messages}/>
        </div>
    )
}