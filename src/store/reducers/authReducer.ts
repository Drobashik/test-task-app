import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DTOUser } from "../../models/models";

type AuthStateProps = {
    isLoading: boolean;
    error: string;
    userDto: DTOUser | null;
}

const initialState: AuthStateProps = {
    isLoading: false,
    error: '',
    userDto: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register(state) {
            state.isLoading = true;
        },
        registerSuccess(state,  action: PayloadAction<DTOUser>) {
            state.isLoading = false;
            state.userDto = action.payload;
        },
        registerError(state, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.error = action.payload.message
        }
    }
})

export default authSlice.reducer;