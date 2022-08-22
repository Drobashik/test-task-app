import axios from "../../axios"
import { DTOUser, User } from "../../models/models"
import { authSlice } from "../reducers/authReducer"
import { userSlice } from "../reducers/userReducer"
import { AppDispatch } from "../store"

export const fetchUsers = (page = 1, count = 6, id = '') => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.getUsers())
            const responseData = await axios.get<DTOUser>(`users/${id ? +id : ''}`, {
                params: {
                    page,
                    count,
                }
            });
            dispatch(userSlice.actions.getUsersSuccess(responseData.data))
        } catch (error) {
            dispatch(userSlice.actions.getUsersError(error as Error))
        }
    }
}

export const postUser = (user: FormData, token: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.register());
            const responseData = await axios.post('users', user, {
                headers: {
                    Token: token
                },
            });
            dispatch(authSlice.actions.registerSuccess(responseData.data))
        } catch (error) {
            console.log(error);
        }
    }
}