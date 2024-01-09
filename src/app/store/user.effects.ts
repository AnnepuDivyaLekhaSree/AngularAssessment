import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUsers, getUsersSuccess, updateUser, updateUserSuccess } from "./user.action";
import { map, switchMap } from "rxjs";
import { UserService } from "../services/user.service";
import { IUser } from "../interfaces/user.interface";




@Injectable()
export class UserEffects {
    constructor(private readonly actions$: Actions, private readonly userService: UserService) {
    }

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUsers.type),
            switchMap(() => this.userService.getData()),
            map((users: any) => {
                users = users.users.map((user:any) => ({ id: user.id, firstName: user.firstName, lastName:user.lastName, age:user.age, gender:user.gender }));
                console.log("API call")
                console.log(users)
                return getUsersSuccess({ users })})
        )
    );
}