import { Action, createReducer, on } from '@ngrx/store';

import { IUserState } from './user.model';
import { getUsers, getUsersSuccess, updateUser, updateUserSuccess } from './user.action';

export const initialUserState: IUserState = {
    users: [],
    isLoading: false
};

const reducer = createReducer<IUserState>(
    initialUserState,
    on(getUsers, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(getUsersSuccess, (state, { users }) => {
        return {
            ...state,
            isLoading: false,
            users
        };
    }),
    on(updateUser, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(updateUserSuccess, (state, { user }) => {
        return {
            ...state,
            users: state.users.map((b) => (user && b.id === user.id) ? user : b),
            isLoading: false,
        };
    })
);

export function userReducer(state = initialUserState, actions: Action): IUserState {
    return reducer(state, actions);
}
