import { createSlice } from "@reduxjs/toolkit";


const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        loginPopup: false
    },
    reducers: {
        openLoginPopup: function (state) {
            state.loginPopup = true
        },
        closeLoginPopup: function (state) {
            state.loginPopup = false
        }
    }
})

export const {openLoginPopup,closeLoginPopup } = settingsSlice.actions
export default settingsSlice.reducer