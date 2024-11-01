import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if you have them
  },
});

export default store;
