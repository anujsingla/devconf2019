import React, {useReducer} from 'react';
import reducer, {initialState} from './reducer';
import { PublishComment } from './PublishComment';
import { ShowComment } from './ShowComment';

export function AppComment() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <div>
            <h2>User Comment</h2>
            <hr/>
            <PublishComment dispatch={dispatch} />
            <hr/>
            <ShowComment comment={state.comment}/>
        </div>
    )
}