import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import portReducer from './portSlice';
import portsReducer from './portsSlice';
import messageReducer from './messageSlice';
import settingReducer from './settingSlice';

const rootReducer = {
    setting: settingReducer,
    ports: portReducer,
    message: messageReducer,
    listPorts: portsReducer,
    theme: themeReducer,
}

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store