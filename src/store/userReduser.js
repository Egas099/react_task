const defaultState = {
    users: [],
    usersExist: false,
}

const IMPORT_USERS = 'IMPORT_USERS';
const REMOVE_USER = 'REMOVE_USER';

export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case IMPORT_USERS:
            return { ...state, users: action.payload, usersExist: true };
        case REMOVE_USER:
            return { ...state, users: state.users.filter(user => user !== action.payload) };
        default:
            return state;
    }
}

export const addUsers = (payload) => ({ type: IMPORT_USERS, payload })
export const removeUser = (payload) => ({ type: REMOVE_USER, payload })