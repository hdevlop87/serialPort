import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type:"",
    label:""
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.label = action.payload.label
            state.type = action.payload.type
        },
        clearMessage: (state) => {
            state.type = ""
            state.label = ""
        },
    },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions
export default reducer;
