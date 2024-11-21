import axios from 'axios';
import conf from '../conf/conf.js';  // Configuration file for the API URL

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
            const response = await axios.post(`${this.apiUrl}/api/v1/users/register`, formData, {
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

    // Other methods (login, getCurrentUser, logout) remain unchanged
}

const authService = new AuthService();
export default authService;
