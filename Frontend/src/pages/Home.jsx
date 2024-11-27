import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../components/Header/DashBoard';

function Home() {
    const authStatus = useSelector((state) => state.auth.status); // Get auth status
    const user = useSelector((state) => state.auth.userData); // Get user data

    if (authStatus && user) {
        // Render the dashboard if authenticated
        return (
            <div>
                <Dashboard/>
              
            </div>
        );
    }

    // Render the home page for unauthenticated users
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our application. Please log in to access more features.</p>
        </div>
    );
}

export default Home;
