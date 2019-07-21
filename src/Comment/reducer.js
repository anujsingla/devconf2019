import uuid from 'uuid/v4';

export const POST_COMMENT = 'POST_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// action
export const newMessage = (text) => {
    return {
        type: POST_COMMENT,
        item: {text, id: uuid()}
    }
}

export const deleteMessage = (text, id) => {
    return {
        type: DELETE_COMMENT,
        item: {text, id}
    }
}

export const initialState = {comment: []};

const reducer = (state, action) => {
    switch(action.type) {
        case POST_COMMENT:
            return {
                ...state, comment: [...state.comment, action.item]
            }
        case DELETE_COMMENT:
        const comment = state.comment.filter(c => c.id !== action.item.id) 
        return {
                ...state, comment: [...comment]
            }
        default:
            return state;
    }
}

export default reducer;
  