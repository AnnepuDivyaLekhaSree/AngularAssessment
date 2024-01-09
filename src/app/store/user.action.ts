import {createAction, props} from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';

const prefix = '[Users]'
export const getUsers = createAction(`${prefix} Get Users`);
export const getUsersSuccess = createAction(`${getUsers.type} Success`, props<{users:IUser[];}>());

export const updateUser = createAction(`${prefix} Update Users`, props<{user:IUser;}>());
export const updateUserSuccess = createAction(`${updateUser.type} Success`, props<{user:IUser;}>());