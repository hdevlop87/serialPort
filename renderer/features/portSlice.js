import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import { openPort, closePort, getStatePort } from '../utils/electronBridge';
import { openPort, closePort, getStatePort, sendToPort } from '../utils/socketBridge';
import { setMessage } from '../features/messageSlice';
import { upsert } from '../utils/global';
import { setPortSetting } from '../features/settingSlice';

const handleMessage = (util, message) => {
   util.dispatch(setMessage(message));
}

//====================== open port ================================//
export const createPort = createAsyncThunk("createPort",
   async (_, thunkAPI) => {
      const { portSetting } = thunkAPI.getState().setting;
      try {
         let resp = await openPort(portSetting);
         handleMessage(thunkAPI, resp);
         thunkAPI.dispatch(setPortSetting(portSetting))
         return {
            option: portSetting,
            portState: resp
         }
      } catch (error) {
         handleMessage(thunkAPI, error)
         return thunkAPI.rejectWithValue();
      }
   });
//====================== close port ================================//
export const updatePort = createAsyncThunk("updatePort",
   async (data, thunkAPI) => {
      const { portSetting } = thunkAPI.getState().setting;
      try {
         let resp = await closePort(portSetting.path);
         handleMessage(thunkAPI, resp);
         return {
            option: portSetting,
            portState: resp
         }
      } catch (error) {
         handleMessage(thunkAPI, error)
         return thunkAPI.rejectWithValue();
      }
   });
//====================== close port ================================//
export const deletePort = createAsyncThunk("deletePort",
   async (_, thunkAPI) => {
      try {
         const { portSetting } = thunkAPI.getState().setting;
         let resp = await closePort(portSetting.path);
         handleMessage(thunkAPI, resp);
         return {
            option: portSetting,
            portState: resp
         }
      } catch (error) {
         handleMessage(thunkAPI, error)
         return thunkAPI.rejectWithValue();
      }
   });
//====================== close port ================================//
export const statePort = createAsyncThunk("statePort",
   async (path, thunkAPI) => {
      try {
         let resp = await getStatePort(path);
         handleMessage(thunkAPI, resp);
         return resp
      } catch (error) {
         handleMessage(thunkAPI, error)
         return thunkAPI.rejectWithValue();
      }
   });
//===============================================================//
export const pausePort = createAsyncThunk("pausePort",
   async (path, thunkAPI) => {

   });
//===============================================================//
export const writePort = createAsyncThunk("writePort",
   async (msg, thunkAPI) => {
      const { portSetting } = thunkAPI.getState().setting;
      try {
         const data = {
            path: portSetting.path,
            msg: msg
         }
         let resp = await sendToPort(data);
         return resp

      } catch (error) {
         handleMessage(thunkAPI, error)
         return thunkAPI.rejectWithValue();
      }
   });
//===============================================================//
export const clearAll = createAsyncThunk("clearAll",
   async (path, thunkAPI) => {

   });
//===============================================================//
const initialState = [
];

const portSlice = createSlice({
   name: "ports",
   initialState,
   reducers: {},
   extraReducers: {
      //====================================================//
      //====================================================//
      [createPort.fulfilled]: (state, { payload }) => {
         state = upsert(state, payload, "path")
      },

      [createPort.rejected]: (state) => {
      },
      //====================================================//
      //====================================================//
      [updatePort.fulfilled]: (state, { payload }) => {
         state = upsert(state, payload, "path")
      },

      [updatePort.rejected]: (state) => {

      },
      //====================================================//
      //====================================================//
      [deletePort.fulfilled]: (state, { payload }) => {
         state = upsert(state, payload, "path")
      },

      [deletePort.rejected]: (state) => {
      },
      //====================================================//
      //====================================================//
      [writePort.fulfilled]: (state, { payload }) => {

      },

      [writePort.rejected]: (state) => {
      },
   },
});

const { reducer, actions } = portSlice;

export default reducer;

//// state css 