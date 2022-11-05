import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import { openPort, getAllPorts,test } from '../utils/electronBridge';
import { getAllPorts } from '../utils/socketBridge';
import { setMessage } from './messageSlice';

//====================== get All Ports =============================//
export const getPorts = createAsyncThunk("getPorts",
   async (_, thunkAPI) => {
      try {
         let ports = await getAllPorts();
         ports = ports.map(e => {
            if (e.friendlyName) {
               e.name = `${e.path} (${e.friendlyName.replace(/ *\([^)]*\) */g, "")})`
            }
            delete e.friendlyName;
            return e
         })
         return ports;

      } catch (error) {
         thunkAPI.dispatch(setMessage({
            type: "error",
            label: error
         }));
         return thunkAPI.rejectWithValue();
      }
   });


//===============================================================//

const portSlice = createSlice({
   name: "listPorts",
   initialState: [],
   reducers: {},
   extraReducers: {
      [getPorts.fulfilled]: (state, { payload }) => {
         state = payload;
      },
      [getPorts.rejected]: (state) => {
         
      },

   },
});

const { reducer, actions } = portSlice;

export const { setPortSetting, clearAll } = actions
export default reducer;
