import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let postVal = action.newPost;
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
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const AddPostActionCreater = (newPost) => ({ type: ADD_POST, newPost });

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
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

export const savePhoto = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export default profileReducer;
