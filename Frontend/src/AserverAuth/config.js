import axios from 'axios';
import conf from '../conf/conf.js'; // Configuration file for the API URL
import Cookies from 'js-cookie';

class VideoService {
    constructor() {
        this.apiUrl = conf.apiUrl; // API base URL from the configuration (e.g., `http://localhost:8000/api/v1`)
    }

    // Add a video to the user's watch history
    async addVideo(videoUrl) {
        try {
            // Get the access token from localStorage
            console.log("In the VideoService/addVideo")
            const accessToken = localStorage.getItem('accessToken');

            if (!accessToken) {
                console.log('No access token found in localStorage');
                return null; // Return null if access token is not found
            }

            // Prepare the POST request to add the video to the watch history
            const response = await axios.post(
                `${this.apiUrl}/video/addVideo`, // API endpoint for adding the video
                { videoUrl }, // Send the video URL in the request body
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`, // Attach the access token in the Authorization header
                    },
                    withCredentials: false, // No need to send cookies with this request
                }
            );

            console.log('Video added to watch history:', response.data); // Log the response data
            return response.data; // Return the response data (e.g., success message or video data)
        } catch (error) {
            console.error('Error adding video to watch history:', error);
            throw new Error(error.response ? error.response.data.message : error.message); // Propagate the error
        }
    }
}

const videoService = new VideoService();
export default videoService;
