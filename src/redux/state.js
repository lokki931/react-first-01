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
        ]
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
        ]
    }

};

export let addPost = (postMessage) => {
    let newPost = {
        id: 6,
        like: 0,
        title: postMessage
    };

    state.profilePage.posts.push(newPost);
    rerenderEntierTreee(state);
};

export default state;