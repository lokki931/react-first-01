import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {
      id: 1,
      like: 7,
      title: 'Hi',
    },
    {
      id: 2,
      like: 1,
      title: 'How are you?',
    },
    {
      id: 3,
      like: 4,
      title: 'Hi Nick',
    },
    {
      id: 4,
      like: 3,
      title: 'Oh',
    },
    {
      id: 5,
      like: 2,
      title: 'Haha',
    },
  ],
  profile: null,
  onPostValue: 'Add post name...',
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let postVal = state.onPostValue;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 6,
            like: 0,
            title: postVal,
          },
        ],
        onPostValue: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        onPostValue: action.newText,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const AddPostActionCreater = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

//thunk
export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
