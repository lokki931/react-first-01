const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state
    };

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                like: 0,
                title: state.onPostValue
            };

            stateCopy.posts.push(newPost);
            stateCopy.onPostValue = '';

            return stateCopy;


        case UPDATE_NEW_POST_TEXT:
            stateCopy.onPostValue = action.newText;
            return stateCopy;

        default:
            return state;
    }

}

export const AddPostActionCreater = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;

