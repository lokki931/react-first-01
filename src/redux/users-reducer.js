const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_MAX_PAGE_NUMBER = 'SET-MAX-PAGE-NUMBER';
const SET_MIN_PAGE_NUMBER = 'SET-MIN-PAGE-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [
    // {
    //     id: 1,
    //     fullName: 'Taras',
    //     photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
    //     followed: true,
    //     status: 'Hi i am programer js',
    //     location: {
    //         city: 'Khmel',
    //         country: 'Ukraine'
    //     }
    // },
    // {
    //     id: 2,
    //     fullName: 'Sasha',
    //     photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
    //     followed: false,
    //     status: 'Hi i am bild',
    //     location: {
    //         city: 'Kiev',
    //         country: 'Ukraine'
    //     }
    // },
    // {
    //     id: 3,
    //     fullName: 'Dima',
    //     photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
    //     followed: true,
    //     status: 'Hi i am programer php',
    //     location: {
    //         city: 'Volochusk',
    //         country: 'Ukraine'
    //     }
    // },
    // {
    //     id: 4,
    //     fullName: 'Olya',
    //     photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
    //     followed: false,
    //     status: 'Hi i am teacher',
    //     location: {
    //         city: 'Volochusk',
    //         country: 'Ukraine'
    //     }
    // }
  ],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  pageNumberLimit: 8,
  maxPageNumberLimit: 8,
  minPageNumberLimit: 0,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case SET_MAX_PAGE_NUMBER:
      return {
        ...state,
        maxPageNumberLimit: action.maxPageNumberLimit,
      };
    case SET_MIN_PAGE_NUMBER:
      return {
        ...state,
        minPageNumberLimit: action.minPageNumberLimit,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

export const setMaxPageNumber = (maxPageNumberLimit) => ({
  type: SET_MAX_PAGE_NUMBER,
  maxPageNumberLimit,
});

export const setMinPageNumber = (minPageNumberLimit) => ({
  type: SET_MIN_PAGE_NUMBER,
  minPageNumberLimit,
});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export default usersReducer;
