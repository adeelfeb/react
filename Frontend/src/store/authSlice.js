// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     status: false,
//     userData: {
//         _id: null,
//         username: null,
//         email: null,
//         fullname: null,
//         avatar: null,
//         coverImage: null,
//         watchHistory: [],
//         createdAt: null,
//         updatedAt: null,
//         __v: null,
//     },
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.status = true;  // Assuming the status is true when logged in
//             state.userData = {
//                 _id: action.payload._id,
//                 username: action.payload.username,
//                 email: action.payload.email,
//                 fullname: action.payload.fullname,
//                 avatar: action.payload.avatar,
//                 coverImage: action.payload.coverImage,
//                 watchHistory: action.payload.watchHistory,
//                 createdAt: action.payload.createdAt,
//                 updatedAt: action.payload.updatedAt,
//                 __v: action.payload.__v,
//             };
//         },
//         logout: (state) => {
//             state.status = false;
//             state.userData = {
//                 _id: null,
//                 username: null,
//                 email: null,
//                 fullname: null,
//                 avatar: null,
//                 coverImage: null,
//                 watchHistory: [],
//                 createdAt: null,
//                 updatedAt: null,
//                 __v: null,
//             };
//         },
//     },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, // Tracks login status
    userData: {
        _id: null,
        username: null,
        email: null,
        fullname: null,
        avatar: null,
        coverImage: null,
        watchHistory: [],
        createdAt: null,
        updatedAt: null,
        __v: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.status = action.payload; // Set login status (true/false)
        },
        setUserData: (state, action) => {
            state.userData = {
                _id: action.payload._id,
                username: action.payload.username,
                email: action.payload.email,
                fullname: action.payload.fullname,
                avatar: action.payload.avatar,
                coverImage: action.payload.coverImage,
                watchHistory: action.payload.watchHistory,
                createdAt: action.payload.createdAt,
                updatedAt: action.payload.updatedAt,
                __v: action.payload.__v,
            };
        },
        logout: (state) => {
            state.status = false; // Reset login status
            state.userData = { // Reset user data
                _id: null,
                username: null,
                email: null,
                fullname: null,
                avatar: null,
                coverImage: null,
                watchHistory: [],
                createdAt: null,
                updatedAt: null,
                __v: null,
            };
        },
    },
});

export const { setLoginStatus, setUserData, logout } = authSlice.actions;

export default authSlice.reducer;