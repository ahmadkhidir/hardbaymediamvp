import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utilities/helper";
import { loginAPI, registerUserAPI, verifyEmailAPI } from "../api";

export const loginUserThunk = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            console.log("Cred",credentials);
            const response = await loginAPI(credentials);
            console.log(response);
            if (response.status === true) {
                return response.data;
            } else {
                throw response.message
            }
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const verifyUserThunk = createAsyncThunk(
    "auth/verify-email",
    async (credentials, thunkAPI) => {
        try {
            console.log("Email", credentials['email']);
            const response = await verifyEmailAPI(credentials['email']);
            if (response.status === true) {
                return credentials;
            } else {
                throw response.message
            }
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }

    }
)

export const registerUserThunk = createAsyncThunk(
    "auth/register",
    async (otp, thunkAPI) => {
        try {
            console.log(thunkAPI.getState().auth.user)
            const user = thunkAPI.getState().auth.user;
            const credentials = {...user, "otp": otp};
            console.log("Credentials", credentials);
            const response = await registerUserAPI(credentials);
            if (response.status === true) {
                return credentials;
            } else {
                throw response.message
            }
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
        authToken: null,
        status: Status.idle,
        statusMessage: null,
    },
    reducers: {
        "statusToIdle": (state) => {
            state.status = Status.idle
        }
    },
    extraReducers: builder => {
        builder
        // Verify
            .addCase(verifyUserThunk.pending,
                (state, action) => {
                    state.status = Status.pending;
                },
            )
            .addCase(verifyUserThunk.rejected,
                (state, action) => {
                    state.status = Status.failed;
                    state.statusMessage = action.payload;
                },
            )
            .addCase(verifyUserThunk.fulfilled,
                (state, action) => {
                    state.status = Status.success;
                    console.log("Data", action.payload)
                    state.user = action.payload;
                },
            )
            // Register
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
                    console.log("Data", action.payload)
                    state.user = null;
                },
            )
            // Login
            .addCase(loginUserThunk.pending,
                (state, action) => {
                    state.status = Status.pending;
                },
            )
            .addCase(loginUserThunk.rejected,
                (state, action) => {
                    state.status = Status.failed;
                    state.statusMessage = action.payload;
                },
            )
            .addCase(loginUserThunk.fulfilled,
                (state, action) => {
                    state.status = Status.success;
                    console.log("Data", action.payload)
                    state.authToken = action.payload['auth-token']
                },
            )
    }
})

export const {statusToIdle} = slice.actions

export default slice.reducer