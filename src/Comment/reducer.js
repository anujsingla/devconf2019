import uuid from 'uuid/v4';

export const POST_COMMENT = 'POST_COMMENT';

// action
export const newMessage = (text) => {
    return {
        type: POST_COMMENT,
        item: {text, id: uuid()}
    }
}

export const initialState = {comment: []};

const reducer = (state, action) => {
    switch(action.type) {
        case POST_COMMENT:
            return {
                ...state, comment: [...state.comment, action.item]
            }
        default:
            return state;
    }
}

export default reducer;
  