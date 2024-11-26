// import axios from 'axios';
// import conf from '../conf/conf.js';  // Configuration file for the API URL
// import Cookies from 'js-cookie';
// import queryString from "query-string";
// import { useDispatch } from 'react-redux';

// export class AuthService {
//     constructor() {
//         this.apiUrl = conf.apiUrl;  // API base URL from the configuration (e.g., `http://localhost:8000/api/v1`)
//     }

    // // Create an account by sending POST request to the backend
    // async createAccount({email, password, fullname, username, avatar, coverImage}) {
    //     try {
    //         // Prepare FormData to send as POST request (includes files)
    //         const formData = new FormData();
    //         formData.append('email', email);
    //         formData.append('password', password);
    //         formData.append('fullname', fullname);  // Changed from 'name' to 'fullname'
    //         formData.append('username', username);  // Added 'username' field

    //         // If avatar is provided, append it to the FormData
    //         if (avatar) {
    //             formData.append('avatar', avatar);
    //         }

    //         // If cover image is provided, append it to the FormData
    //         if (coverImage) {
    //             formData.append('coverImage', coverImage);
    //         }
    //         console.log("Sending data to backend:", this.apiUrl, formData);

    //         // Send the request to the backend to create an account with images (if provided)
    //         const response = await axios.post(`${this.apiUrl}/users/register`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'  // Important for file uploads
    //             }
    //         });

    //         console.log("Account creation response:", response.data);  // Log the server response
    //         return response.data;  // Return the data from the response (e.g., user details or success message)
    //     } catch (error) {
    //         console.error("Error creating account:", error);
    //         throw error;  // Propagate the error to be handled by the calling function
    //     }
    // }


    
//     // async login(data) {
//     //     try {
//     //         const email = data.emailOrUsername;
//     //         const password = data.password;
    
//     //         console.log("currently check email password", email, password);
    
//     //         // Send the login request to the backend
//     //         const response = await axios.post(`${this.apiUrl}/users/login`, { email, password }, {
//     //             headers: {
//     //                 'Content-Type': 'application/json',  // Changed to application/json since no file is involved
//     //             },
//     //             withCredentials: false,  // Ensure cookies are sent with the request
//     //         });
    
//     //         console.log(response.data); // Log the response data
    
//     //         // Extract tokens from response data
//     //         const { accessToken, refreshToken } = response.data.data || {}; // Destructure from data if available
//     //         console.log(accessToken, "______________________", refreshToken);
    
//     //         // Check if cookies are set after login
//     //         const cookies = document.cookie;
    
//     //         // Check if cookies are not set
//     //         if (cookies.includes('accessToken') && cookies.includes('refreshToken')) {
//     //             console.log('Cookies are set:', cookies);
//     //         } else {
//     //             console.log('Cookies are not set');
    
//     //             // Store tokens in localStorage if cookies are not set
//     //             if (accessToken && refreshToken) {
//     //                 localStorage.setItem('accessToken', accessToken);
//     //                 localStorage.setItem('refreshToken', refreshToken);
//     //                 console.log('Tokens stored in localStorage');
    
//     //                 // Retrieve and print the tokens from localStorage
//     //                 const storedAccessToken = localStorage.getItem('accessToken');
//     //                 const storedRefreshToken = localStorage.getItem('refreshToken');
//     //                 console.log('Access Token from localStorage:', storedAccessToken);
//     //                 console.log('Refresh Token from localStorage:', storedRefreshToken);
//     //             } else {
//     //                 console.log('Tokens not found in response data');
//     //             }
//     //         }
    
//     //         // Optionally return the response data (e.g., user data, token)
//     //         return response.data;
//     //     } catch (error) {
//     //         const errorMessage = error.response ? error.response.data.message : error.message;
//     //         throw new Error(errorMessage);  // Propagate a detailed error message
//     //     }
//     // }
//     async login(data) {
//         try {
//             const email = data.emailOrUsername;
//             const password = data.password;

//             // Send the login request to the backend
//             const response = await axios.post(`${this.apiUrl}/users/login`, { email, password }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: false,
//             });

//             const { avatar, profileLink, fullname, coverImage, accessToken, refreshToken } = response.data.data || {};

//             // Store tokens in localStorage
//             if (accessToken && refreshToken) {
//                 localStorage.setItem('accessToken', accessToken);
//                 localStorage.setItem('refreshToken', refreshToken);
//             }

//             // Dispatch the login action with user data
            // const dispatch = useDispatch();
            // dispatch(login({
            //     avatar,
            //     profileLink,
            //     fullname,
            //     coverImage,
            // }));

//             return response.data;
//         } catch (error) {
//             const errorMessage = error.response ? error.response.data.message : error.message;
//             throw new Error(errorMessage);
//         }
//     }
    

//     async googleLogin({ tokenId }) {
//         try {
//             console.log("In the google auth Function")
//             const response = await axios.post(`${this.apiUrl}/users/google-login`, { tokenId }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: false,
//             });
    
//             const { accessToken, refreshToken } = response.data.data || {};
//             if (accessToken && refreshToken) {
//                 localStorage.setItem('accessToken', accessToken);
//                 localStorage.setItem('refreshToken', refreshToken);
//             }
    
//             return response.data;
//         } catch (error) {
//             const errorMessage = error.response ? error.response.data.message : error.message;
//             throw new Error(errorMessage);
//         }
//     }
    

//         async getCurrentUser() {
//             try {
//                 console.log("At least moved here");
        
//                 // Retrieve tokens from cookies or localStorage
//                 const accessToken = document.cookie.includes('accessToken') ? document.cookie.split('; ').find(cookie => cookie.startsWith('accessToken='))?.split('=')[1] : localStorage.getItem('accessToken');
//                 const refreshToken = localStorage.getItem('refreshToken');  // In case you also need to send the refresh token
        
//                 if (!accessToken) {
//                     console.log("No access token found in localStorage or cookies");
//                     return null;  // Return null if access token is not found
//                 }
        
//                 // Send GET request with Authorization header containing the access token
//                 const response = await axios.post(
//                     `${this.apiUrl}/users/current-user`, // API endpoint
//                     {}, // No data needed for this request
//                     {
//                         headers: {
//                             "Authorization": `Bearer ${accessToken}`, // Attach the access token to the Authorization header
//                         },
//                         withCredentials: false,  // Ensure cookies are sent with the request
//                     }
//                 );
        
//                 // Return the response data (current user)
//                 return response.data;
//             } catch (error) {
//                 console.log("Error fetching current user", error);
//                 return null; // Return null if there's an error
//             }
//         }
        


//     async logout() {
//             try {
//                 // Retrieve tokens from localStorage
//                 const accessToken = localStorage.getItem('accessToken');
//                 const refreshToken = localStorage.getItem('refreshToken');
        
//                 if (!accessToken) {
//                     console.log("No access token found in localStorage");
//                     return null;  // Return null if access token is not found
//                 }
                
        
//                 // Send POST request to log out on the server
//                 const response = axios.post(
//                     `${this.apiUrl}/users/logout`, // API endpoint
//                     {}, // No data needed for this request
//                     {
//                         headers: {
//                             "Authorization": `Bearer ${accessToken}`, // Attach the access token to the Authorization header
//                         },
//                         withCredentials: false, // Ensure cookies are sent with the request (if needed)
//                     }
//                 )
//                 // Clear tokens from localStorage
//                 localStorage.removeItem('accessToken');
//                 localStorage.removeItem('refreshToken');
//                 console.log('Tokens removed from localStorage');
        
//                 // Handle the response (e.g., show a message or redirect)
//                 console.log(response.data); // "User Logged Out"
//                 return response.data;
//             } catch (error) {
//                 console.error('Error logging out:', error);
//                 throw new Error(error.response ? error.response.data.message : error.message);
//             }
//         }
        
        
        
    
    
// }

// const authService = new AuthService();
// export default authService;


import axios from 'axios';
import conf from '../conf/conf.js';  // Configuration file for the API URL
import { connect, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import queryString from "query-string";

export class AuthService {
    constructor() {
        this.apiUrl = conf.apiUrl;  // API base URL from the configuration (e.g., `http://localhost:8000/api/v1`)
    }

    

     
    async createAccount({ email, password, fullname, username, avatar, coverImage }) {
        try {
            // Prepare FormData to send as POST request (includes files)
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('fullname', fullname);
            formData.append('username', username);
    
            // If avatar is provided, append it to the FormData
            if (avatar) {
                formData.append('avatar', avatar);
            }
    
            // If cover image is provided, append it to the FormData
            if (coverImage) {
                formData.append('coverImage', coverImage);
            }
    
            console.log("Sending data to backend:", this.apiUrl, formData);
    
            // Send the request to the backend to create an account with images (if provided)
            const response = await axios.post(`${this.apiUrl}/users/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: false,
            });
    
            console.log("Account creation response:", response.data.data);
    
            if (response.data.success) {
                // Get the temporary token from the response
                const { temporaryToken } = response.data.data;
                console.log(temporaryToken)
                // Now call the loginWithTemporaryToken function and pass the temporaryToken
                return this.loginWithTemporaryToken({ temporaryToken });
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;  // Propagate the error to be handled by the calling function
        }
    }
    


    async loginWithTemporaryToken({ temporaryToken }) {
        try {
            const response = await axios.post(`${this.apiUrl}/users/login-with-temp-token`, { token: temporaryToken }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false,
            });
            

            const { accessToken, refreshToken, avatar, profileLink, fullname, coverImage } = response.data.data || {};

            if (accessToken && refreshToken) {
                // Store the access and refresh tokens
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }
            // const dispatch = useDispatch();  // Using dispatch to update the Redux store

            // // Dispatch login action to update authSlice in Redux store
            // dispatch(login({
            //     avatar,
            //     profileLink,
            //     fullname,
            //     coverImage
            // }));


            return { avatar, profileLink, fullname, coverImage }; // Return only user data
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }

    async login(data) {
        try {
            const { emailOrUsername, password } = data;
            console.log("Before post to server", emailOrUsername, password)
            const response = await axios.post(`${this.apiUrl}/users/login`, { email: emailOrUsername, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false,
            });

            const { accessToken, refreshToken, user } = response.data.data || {};
            console.log("Every response", accessToken, refreshToken,user)
            if (accessToken && refreshToken) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }
            // const dispatch = useDispatch();
            // dispatch(login({
            //     avatar,
            //     profileLink,
            //     fullname,
            //     coverImage,
            // }));

            return { user }; // Return only user data
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }

    async googleLogin({ tokenId }) {
        try {
            const response = await axios.post(`${this.apiUrl}/users/google-login`, { tokenId }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false,
            });

            const { accessToken, refreshToken } = response.data.data || {};
            if (accessToken && refreshToken) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }

            return response.data;
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }

    async getCurrentUser() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) return null;

            const response = await axios.post(
                `${this.apiUrl}/users/current-user`, 
                {},
                { headers: { "Authorization": `Bearer ${accessToken}` }, withCredentials: false }
            );

            return response.data;
        } catch (error) {
            console.error("Error fetching current user:", error);
            return null;
        }
    }

    async logout() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) return null;

            await axios.post(`${this.apiUrl}/users/logout`, {}, {
                headers: { "Authorization": `Bearer ${accessToken}` }, 
                withCredentials: false 
            });

            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        } catch (error) {
            console.error('Error logging out:', error);
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }
}

const authService = new AuthService();
export default authService;
