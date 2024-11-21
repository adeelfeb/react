import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // To check authentication status
import InputURL from './InputURL';

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status); // Get auth status

    return (
        <div>
            {/* Conditionally render based on authStatus */}
            {!authStatus ? (
                <h1>Welcome to the Home Page</h1> // If not logged in, show welcome message
            ) : (
                <div>
                    <h2>Input URL</h2>
                    <InputURL /> {/* Show InputURL component if logged in */}
                </div>
            )}
        </div>
    );
}

export default Home;
