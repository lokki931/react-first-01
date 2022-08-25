const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Taras',
            photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
            followed: true,
            status: 'Hi i am programer js',
            location: {
                city: 'Khmel',
                country: 'Ukraine'
            }
        },
        {
            id: 2,
            fullName: 'Sasha',
            photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
            followed: false,
            status: 'Hi i am bild',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            fullName: 'Dima',
            photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
            followed: true,
            status: 'Hi i am programer php',
            location: {
                city: 'Volochusk',
                country: 'Ukraine'
            }
        },
        {
            id: 4,
            fullName: 'Olya',
            photoUrl: 'https://static1.funidelia.com/5150-f6_big2/seksualnij-kostum-dla-doroslih-nejtiri-z-avatara.jpg',
            followed: false,
            status: 'Hi i am teacher',
            location: {
                city: 'Volochusk',
                country: 'Ukraine'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return (u)
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return (u)
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;

