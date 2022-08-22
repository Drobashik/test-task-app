import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Position } from "../../models/models";

type PositionStateProps = {
    isLoading: boolean;
    error: string;
    positions: Position[]
}

const initialState: PositionStateProps = {
    isLoading: false,
    error: '',
    positions: []
}

export const positionSlice = createSlice({
    name: 'position',
    initialState,
    reducers: {
        getPositions(state) {
            state.isLoading = true;
        },
        getPositionsSuccess(state, action: PayloadAction<Position[]>) {
            state.isLoading = false;
            state.positions = action.payload;
        },
        getPositionsError(state, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.error = action.payload.message;
        }
    }
})

export default positionSlice.reducer;