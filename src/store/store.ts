import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import positionReducer from "./reducers/positionReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    user: userReducer,
    position: positionReducer,
    auth: authReducer,
})

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch']