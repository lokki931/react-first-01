import { rerenderEntierTreee } from './../render';
let state = {

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

};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 6,
        like: 0,
        title: state.profilePage.onPostValue
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.onPostValue = '';
    rerenderEntierTreee(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.onPostValue = newText;
    rerenderEntierTreee(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.onMessageValue
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.onMessageValue = '';
    rerenderEntierTreee(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.onMessageValue = newText;
    rerenderEntierTreee(state);
};

export default state;