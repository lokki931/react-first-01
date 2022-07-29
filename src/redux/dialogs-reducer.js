const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.onMessageValue
            };

            state.messages.push(newMessage);
            state.onMessageValue = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.onMessageValue = action.newText;
            break;
        default:
            break;
    }
    return state;
}

export default dialogsReducer;