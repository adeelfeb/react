import axios from 'axios';
import conf from '../conf/conf.js';  // Configuration file for the API URL
import Cookies from 'js-cookie';
import queryString from "query-string";
import { useDispatch } from 'react-redux';

export class AuthService {
    constructor() {
        this.apiUrl = conf.apiUrl;  // API base URL from the configuration (e.g., `http://localhost:8000/api/v1`)
    }

    // Create an account by sending POST request to the backend
    async createAccount({email, password, fullname, username, avatar, coverImage}) {
        try {
            // Prepare FormData to send as POST request (includes files)
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('fullname', fullname);  // Changed from 'name' to 'fullname'
            formData.append('username', username);  // Added 'username' field

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
                    'Content-Type': 'multipart/form-data'  // Important for file uploads
                }
            });

            console.log("Account creation response:", response.data);  // Log the server response
            return response.data;  // Return the data from the response (e.g., user details or success message)
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;  // Propagate the error to be handled by the calling function
        }
    }

    // Login user by sending POST request to the backend
    // async login(data) {
        
    //     try {
    //         const email = data.emailOrUsername;
    //         const password = data.password;
    //         // Send the login request to the backend
            
    //         const response = await axios.post(`${this.apiUrl}/users/login`, { email, password });
    //         console.log(response.data)
    //         return response.data;  // Return the response data (e.g., user data, token)
    //     } catch (error) {
            
    //         const errorMessage = error.response ? error.response.data.message : error.message;
    //         throw new Error(errorMessage);  // Propagate a detailed error message
    //     }
    // }

    async login(data) {
        try {
            const email = data.emailOrUsername;
            const password = data.password;
            
            // Send the login request to the backend
            const response = await axios.post(`${this.apiUrl}/users/login`, { email, password });
    
            console.log(response.data); // Log the response data
    
            // Extract tokens from response data
            const { accessToken, refreshToken } = response.data.data || {}; // Destructure from data if available
            console.log(accessToken, "______________________", refreshToken);
            
            // Check if cookies are set after login
            const cookies = document.cookie;
    
            // Check if cookies are not set
            if (cookies.includes('accessToken') && cookies.includes('refreshToken')) {
                console.log('Cookies are set:', cookies);
            } else {
                console.log('Cookies are not set');
    
                // Store tokens in localStorage if cookies are not set
                if (accessToken && refreshToken) {
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    console.log('Tokens stored in localStorage');
                    
                    // Retrieve and print the tokens from localStorage
                    const storedAccessToken = localStorage.getItem('accessToken');
                    const storedRefreshToken = localStorage.getItem('refreshToken');
                    console.log('Access Token from localStorage:', storedAccessToken);
                    console.log('Refresh Token from localStorage:', storedRefreshToken);
                } else {
                    console.log('Tokens not found in response data');
                }
            }
    
            // Optionally return the response data (e.g., user data, token)
            return response.data;
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            throw new Error(errorMessage);  // Propagate a detailed error message
        }
    }
    
    
    
    

    // Get the current user by sending a request with the token
    

    // async getCurrentUser() {
    // try {
    //     const token = Cookies.get('accessToken');  // Get token from cookies

    //     if (!token) {
    //         throw new Error("No token found");
    //     }

    //     // Assuming a GET request for fetching the current user is appropriate
    //     console.log("Atleast moved here");
    //     const response = await axios.post(`${this.apiUrl}/users/current-user`, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`  // Include token in Authorization header
    //         }
    //     });

    //     return response.data;  // Return the response data (current user)
    // } catch (error) {
    //     console.log("Error fetching current user", error);
    //     return null;  // Return null if there's an error
    // }
    // }


    // async getCurrentUser() {
    //     try {
    //         console.log("At least moved here");
    
    //         // Send GET request with cookies
    //         // const response = await axios.post(`${this.apiUrl}/users/current-user`, {
    //         //     withCredentials: true, // Ensure cookies are included in the request
    //         // });
    //         const token = localStorage.getItem("accessToken");
    //         const response = await axios.post(`${this.apiUrl}/users/current-user`, {}, {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });


    //         return response.data; // Return the response data (current user)
    //     } catch (error) {
    //         console.log("Error fetching current user", error);
    //         return null; // Return null if there's an error
    //     }
    // }

    // async getCurrentUser() {
    //     try {
    //         console.log("At least moved here");
    
    //         // Correct Axios configuration
    //         const response = await axios(`${this.apiUrl}/users/current-user`, {
    //             method: "post", // Use POST
    //             data: {}, // Include an empty payload if needed
    //             withCredentials: true, // Ensure cookies are sent
    //         });
    
    //         return response.data; // Return the response data (current user)
    //     } catch (error) {
    //         console.log("Error fetching current user", error);
    //         return null; // Return null if there's an error
    //     }
    // }
    

    

        // async getCurrentUser() {
        //     try {
        //         console.log("At least moved here");

        //         // Use query-string to encode your data
        //         const params = queryString.stringify({}); // Add data if required

        //         const response = await axios.post(
        //             `${this.apiUrl}/users/current-user`, // Endpoint
        //             params, // Encoded data
        //             {
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded", // Required for URL encoding
        //                 },
        //                 withCredentials: true, // Ensure cookies are sent
        //             }
        //         );

        //         return response.data; // Return the response data (current user)
        //     } catch (error) {
        //         console.log("Error fetching current user", error);
        //         return null; // Return null if there's an error
        //     }
        // }

        // async getCurrentUser() {
        //     try {
        //         console.log("At least moved here");
        
        //         // Use query-string to encode your data (if any)
        //         const params = queryString.stringify({}); // Add any parameters here if needed
        
        //         // Send POST request with URL-encoded data
        //         const response = await axios.post(
        //             `${this.apiUrl}/users/current-user`, // API endpoint
        //             params, // URL-encoded data
        //             {
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded", // Set Content-Type as URL-encoded
        //                 },
        //                 withCredentials: true, // Ensure cookies are sent with the request
        //             }
        //         );
        
        //         // Return the response data (current user)
        //         return response.data;
        //     } catch (error) {
        //         console.log("Error fetching current user", error);
        //         return null; // Return null if there's an error
        //     }
        // }

        // async getCurrentUser() {
        //     try {
        //         console.log("At least moved here");
        
        //         // Retrieve tokens from localStorage
        //         const accessToken = localStorage.getItem('accessToken');
        //         const refreshToken = localStorage.getItem('refreshToken');
        
        //         if (!accessToken) {
        //             console.log("No access token found in localStorage");
        //             return null;  // Return null if access token is not found
        //         }
        
        //         // Use query-string to encode your data (if any)
        //         const params = queryString.stringify({}); // Add any parameters here if needed
        
        //         // Send POST request with URL-encoded data
        //         const response = await axios.post(
        //             `${this.apiUrl}/users/current-user`, // API endpoint
        //             params, // URL-encoded data
        //             {
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded", // Set Content-Type as URL-encoded
        //                     "Authorization": `Bearer ${accessToken}`, // Attach the access token to the Authorization header
        //                 },
        //                 withCredentials: false, // Ensure cookies are sent with the request (if needed)
        //             }
        //         );
        
        //         // Return the response data (current user)
        //         return response.data;
        //     } catch (error) {
        //         console.log("Error fetching current user", error);
        //         return null; // Return null if there's an error
        //     }
        // }
        
        async getCurrentUser() {
            try {
                console.log("At least moved here");
        
                // Retrieve tokens from localStorage
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');
        
                if (!accessToken) {
                    console.log("No access token found in localStorage");
                    return null;  // Return null if access token is not found
                }
        
                // Send POST request with Authorization header containing the access token
                const response = await axios.post(
                    `${this.apiUrl}/users/current-user`, // API endpoint
                    {}, // No data needed for this request
                    {
                        headers: {
                            "Authorization": `Bearer ${accessToken}`, // Attach the access token to the Authorization header
                        },
                        withCredentials: false, // Ensure cookies are sent with the request (if needed)
                    }
                );
        
                // Return the response data (current user)
                return response.data;
            } catch (error) {
                console.log("Error fetching current user", error);
                return null; // Return null if there's an error
            }
        }


        async logout() {
            try {
                // Retrieve tokens from localStorage
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');
        
                if (!accessToken) {
                    console.log("No access token found in localStorage");
                    return null;  // Return null if access token is not found
                }
                
        
                // Send POST request to log out on the server
                const response = axios.post(
                    `${this.apiUrl}/users/logout`, // API endpoint
                    {}, // No data needed for this request
                    {
                        headers: {
                            "Authorization": `Bearer ${accessToken}`, // Attach the access token to the Authorization header
                        },
                        withCredentials: false, // Ensure cookies are sent with the request (if needed)
                    }
                )
                // Clear tokens from localStorage
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                console.log('Tokens removed from localStorage');
        
                // Handle the response (e.g., show a message or redirect)
                console.log(response.data); // "User Logged Out"
                return response.data;
            } catch (error) {
                console.error('Error logging out:', error);
                throw new Error(error.response ? error.response.data.message : error.message);
            }
        }
        
        
        
    
    
}

const authService = new AuthService();
export default authService;
