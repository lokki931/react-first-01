import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscribe(this._state);
    }
};

export default store;


window.store = store;