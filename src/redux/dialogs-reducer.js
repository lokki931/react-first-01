const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Taras',
    },
    {
      id: 2,
      name: 'Dima',
    },
    {
      id: 3,
      name: 'Olga',
    },
    {
      id: 4,
      name: 'Yulia',
    },
    {
      id: 5,
      name: 'Anton',
    },
  ],
  messages: [
    {
      id: 1,
      message: 'Hi',
    },
    {
      id: 2,
      message: 'How are you?',
    },
    {
      id: 3,
      message: 'Hi Nick',
    },
    {
      id: 4,
      message: 'Oh',
    },
    {
      id: 5,
      message: 'Haha',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messVal = action.newMessage;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: messVal }],
        onMessageValue: '',
      };
    default:
      return state;
  }
};
export const AddMessageActionCreater = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;
