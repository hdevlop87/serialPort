import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   portSetting: {
   },
   receiveSetting: {
   },
   sendSetting: {
   }
};

const portSlice = createSlice({
   name: "setting",
   initialState,
   reducers: {
      setPortSetting: (state, { payload }) => {
         state.portSetting = payload
      },
      setRecSetting: (state, { payload }) => {
         state.receiveSetting = payload
      },
      setSendSetting: (state, { payload }) => {
         state.sendSetting = payload
      },
   },
   extraReducers: {},
});

const { reducer, actions } = portSlice;

export const { setPortSetting,setRecSetting,setSendSetting } = actions
export default reducer;
