import React, { useState } from 'react';
import videoService from "../AserverAuth/config"; // Import your video service
import VideoDetails from './VideoDetails'; // Import the new component

const InputURL = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null); // Store the video details to pass to VideoDetails component

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate YouTube URL
    const videoId = getYouTubeVideoId(url);
    if (!videoId) {
      setError('Please enter a valid YouTube video URL.');
      setVideoData(null); // Reset video data
      return;
    }

    setError('');

    try {
      // Send URL to the server and get the response
      const response = await videoService.addVideo(url);
      console.log('Video added:', response); // Log the server response
      setVideoData(response.data); // Set the response data to display
    } catch (error) {
      console.error('Error adding video:', error); // Log any errors
      setVideoData(null); // Reset video data if an error occurs
    }
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null; // Return the video ID or null if not found
  };

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
      {videoData && <VideoDetails data={videoData} />} {/* Pass the response data to the VideoDetails component */}
    </div>
  );
};

export default InputURL;
