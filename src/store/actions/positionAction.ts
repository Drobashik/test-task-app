import axios from "../../axios"
import { DTOPosition } from "../../models/models"
import { positionSlice } from "../reducers/positionReducer"
import { AppDispatch } from "../store"

export const fetchPosition = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(positionSlice.actions.getPositions())
            const responseData = await axios.get<DTOPosition>('positions')
            dispatch(positionSlice.actions.getPositionsSuccess(responseData.data.positions))
        } catch (error) {
            dispatch(positionSlice.actions.getPositionsError(error as Error))
        }
    }
}