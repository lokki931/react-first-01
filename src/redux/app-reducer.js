import { getUserData } from './auth-reducer';

const INITIAL_SUCCESS = 'INITIAL-SUCCESS';

let initialState = {
  initial: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_SUCCESS:
      return {
        ...state,
        initial: true,
      };

    default:
      return state;
  }
};

export const initialSuccess = () => ({
  type: INITIAL_SUCCESS,
});

export const initialApp = () => (dispatch) => {
  const promise = dispatch(getUserData());
  Promise.all([promise]).then(() => {
    dispatch(initialSuccess());
  });
};

export default appReducer;
