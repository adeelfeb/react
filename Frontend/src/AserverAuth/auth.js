import axios from 'axios';
import conf from '../conf/conf.js';  // Configuration file for the API URL
import Cookies from 'js-cookie';


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
    
            // console.log("Sending data to backend:", this.apiUrl, formData);
    
            // Send the request to the backend to create an account with images (if provided)
            const response = await axios.post(`${this.apiUrl}/users/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: false,
            });
    
            // console.log("Account creation response:", response.data.data);
    
            if (response.data.success) {
                // Get the temporary token from the response
                const { temporaryToken } = response.data.data;
                // console.log(temporaryToken)
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
            // console.log( "The temporary token login step" ,temporaryToken)
            const response = await axios.post(`${this.apiUrl}/users/login-with-temp-token`, { token: temporaryToken }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false,
            });
            

            const { accessToken, refreshToken } = response.data.data || {};
            // console.log("Now in the user Data step in the loginWithTemporaryToken :")
            if (accessToken, refreshToken) {
                // Store the access and refresh tokens
                // console.log("accesss and refresh token", accessToken, refreshToken)
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }
        
            return {accessToken, refreshToken}; // Return only user data
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }

    async login(data) {
        try {
            const { emailOrUsername, password } = data;
            // console.log("Before post to server", emailOrUsername, password)
            const response = await axios.post(`${this.apiUrl}/users/login`, { email: emailOrUsername, password }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false,
            });

            const { accessToken, refreshToken} = response.data.data || {};
            // console.log("Every response", accessToken, refreshToken,user)
            if (accessToken && refreshToken) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }
           
            return { accessToken,refreshToken }; // Return only user data
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
            // console.log("Inside the current user:", response.data.data)
            return response.data.data;
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
