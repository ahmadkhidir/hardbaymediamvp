import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utilities/helper";
import { loginAPI, verifyEmailAPI } from "../api";

export const loginUserThunk = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await loginAPI(credentials['email'], credentials["password"]);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const registerUserThunk = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await verifyEmailAPI(credentials['email']);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }

    }
)

const slice = createSlice({
    name: "auth",
    initialState: {
        user: {
            "email": null,
            "password": null,
            "first_name": null,
            "last_name": null,
            "country_of_residence": null,
            "state_of_residence": null,
            "phone_number": null,
            "otp": null,
        },
        authKey: null,
        status: Status.idle,
        statusMessage: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUserThunk.pending,
                (state, action) => {
                    state.status = Status.pending;
                },
            )
            .addCase(registerUserThunk.rejected,
                (state, action) => {
                    state.status = Status.failed;
                    state.statusMessage = action.payload;
                },
            )
            .addCase(registerUserThunk.fulfilled,
                (state, action) => {
                    state.status = Status.success;
                    state.user = action.payload.data;
                },
            )
            .addCase(loginUserThunk.rejected,
                (state, action) => {
                    state.status = Status.failed;
                    state.statusMessage = action.payload;
                    console("Error", action.error)
                },
            )
            .addCase(loginUserThunk.fulfilled,
                (state, action) => {
                    state.status = Status.success;
                    state.user = action.payload.data;
                },
            )
    }
})

export const { } = slice.actions

export default slice.reducer