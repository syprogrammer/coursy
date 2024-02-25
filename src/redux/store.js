import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/user'
import settingsSlice from './slices/setting'


const store = configureStore({
    reducer:{
        userState:userSlice,
        settings:settingsSlice,
    }
})

export default store