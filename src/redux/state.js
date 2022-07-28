const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {

        profilePage: {
            posts: [
                {
                    id: 1,
                    like: 7,
                    title: 'Hi'
                },
                {
                    id: 2,
                    like: 1,
                    title: 'How are you?'
                },
                {
                    id: 3,
                    like: 4,
                    title: 'Hi Nick'
                },
                {
                    id: 4,
                    like: 3,
                    title: 'Oh'
                },
                {
                    id: 5,
                    like: 2,
                    title: 'Haha'
                }
            ],
            onPostValue: 'Add post name...'
        },
        dialogsPage: {
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
        }

    },
    _callSubscribe() {
        console.log('state rerenderEntierTreee');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;// observer pattern
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                like: 0,
                title: this._state.profilePage.onPostValue
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.onPostValue = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.onPostValue = action.newText;
            this._callSubscribe(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.onMessageValue
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.onMessageValue = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.onMessageValue = action.newText;
            this._callSubscribe(this._state);
        }
    }
};

export const AddPostActionCreater = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const AddMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const UpdateNewMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default store;


window.store = store;