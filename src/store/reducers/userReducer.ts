import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DTOUser, User } from "../../models/models";

type UserStateProps = {
    isLoading: boolean;
    error: string;
    usersDto: DTOUser
}


const initialState: UserStateProps = {
    isLoading: false,
    error: '',
    usersDto: {
        total_users: 0,
        users: [],
        message: '',
    }
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers(state) {
            state.isLoading = true;
        },
        getUsersSuccess(state, action: PayloadAction<DTOUser>) {
            state.isLoading = false;
            state.usersDto = action.payload
        },
        getUsersError(state, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.error = action.payload.message
        },
    }
})

export default userSlice.reducer;