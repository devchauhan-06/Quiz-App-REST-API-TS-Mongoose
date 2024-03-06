import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken(state, action) {
            state.token = action.payload;
            console.log(action.payload);
        }
    }
})

export const selectToken = (state) => state.token.token;
export default tokenSlice.reducer;
export const { addToken } = tokenSlice.actions;