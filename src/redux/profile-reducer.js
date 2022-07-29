const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                like: 0,
                title: state.onPostValue
            };

            state.posts.push(newPost);
            state.onPostValue = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.onPostValue = action.newText;
            break;
        default:
            break;
    }
    return state;
}

export default profileReducer;