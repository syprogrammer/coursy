import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/user'

const store = configureStore({
    reducer:{
        userState:userSlice
    }
})

export default store