import uuid from 'uuid/v4';

export const POST_COMMENT = 'POST_COMMENT';

export const newMessage = (text) => {
    return {
        type: POST_COMMENT,
        item: {text, id: uuid()}
    }
}

export const initialState = {messages: []};

const reducer = (state, action) => {
    switch(action.type) {
        case POST_COMMENT:
            return {
                ...state, messages: [...state.messages, action.item]
            }
        default:
            return state;
    }
}

export default reducer;