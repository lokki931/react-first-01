const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Taras'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Olga'
        },
        {
            id: 4,
            name: 'Yulia'
        },
        {
            id: 5,
            name: 'Anton'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Hi Nick'
        },
        {
            id: 4,
            message: 'Oh'
        },
        {
            id: 5,
            message: 'Haha'
        }
    ],
    onMessageValue: 'Add message..'
};

const dialogsReducer = (state = initialState, action) => {
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
export const AddMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const UpdateNewMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default dialogsReducer;