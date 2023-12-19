import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: "" }

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUser(state, action){
            state.user = action.payload;
            console.log(state.user);
        }
    }
})

export const AuthAction = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;  
export default AuthReducer;  