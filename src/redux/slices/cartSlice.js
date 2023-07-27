import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: [],
    reducers: {
        "addToCart": (state, action) => {
            // payload === product
            const index = state.findIndex((value) => value.id === action.payload.id)
            if (index === -1) state.push(action.payload)
        },
        "removeFromCart": (state, action) => {
            // payload === product id
            const index = state.findIndex((value) => value.id === action.payload)
            if (index !== -1) state.splice(index,1)
        }
    }
})

export const {addToCart, removeFromCart} = slice.actions

export default slice.reducer