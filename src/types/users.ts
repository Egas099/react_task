export interface UsersState {
    users: string[];
    usersExist: boolean;
}

export enum UserActionType {
    IMPORT_USERS = 'IMPORT_USERS',
    REMOVE_USER = 'REMOVE_USER',
}

interface ImportUsersAction {
    type: UserActionType.IMPORT_USERS;
    payload: string[];
}
interface RemoveUserAction {
    type: UserActionType.REMOVE_USER;
    payload: String;
}

export type UserAction = ImportUsersAction | RemoveUserAction;