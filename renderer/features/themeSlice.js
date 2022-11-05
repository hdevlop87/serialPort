import { createSlice } from "@reduxjs/toolkit";
import { light, base, dark } from '../styles/theme.styled';

const theme = {
    light: light,
    dark: dark,
}


const initialState = {
    ...light,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,

    reducers: {
        openSidebar: (state, action) => {
            state.isOpen = action.payload;
        },
        setScreenType: (state, action) => {
            state.screenType = action.payload;
        },
        setTheme: (state, action) => {
            return {
                ...state, ...theme[action.payload]
            };
        },
    },
});
const { reducer, actions } = themeSlice;
export const { openSidebar, setScreenType, setTheme } = actions
export default reducer;