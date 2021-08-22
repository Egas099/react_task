import { UserAction, UserActionType, UsersState } from '../types/users';


const defaultState: UsersState = {
    users: [],
    usersExist: false,
}

export const userReduser = (state = defaultState, action: UserAction): UsersState => {
    switch (action.type) {
        case UserActionType.IMPORT_USERS:
            return { ...state, users: action.payload, usersExist: true };
        case UserActionType.REMOVE_USER:
            return { ...state, users: state.users.filter(user => user !== action.payload) };
        default:
            return state;
    }
}

export const addUsers = (payload: string[]) => ({ type: UserActionType.IMPORT_USERS, payload })
export const removeUser = (payload: String) => ({ type: UserActionType.REMOVE_USER, payload })