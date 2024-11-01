import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the auth slice
const initialState = {
    status: false,
    userData: null,
};

// Create the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Reducer for logging in the user
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        // Reducer for logging out the user
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

// Export the action creators
export const { login, logout } = authSlice.actions;

// Export the reducer as the default export
export default authSlice.reducer;
