import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Dashboard from '../components/Header/DashBoard';

// Import images from assets folder
import orbital from '../assets/orbital.png';
import bot from '../assets/bot.png';
import human1 from '../assets/human1.jpeg';
import human2 from '../assets/human2.jpeg';

function Home() {
    const authStatus = useSelector((state) => state.auth.status); // Get auth status
    const user = useSelector((state) => state.auth.userData); // Get user data
    const [typingStatus, setTypingStatus] = useState("Human1");

    if (authStatus && user) {
        // Render the dashboard if authenticated
        return (
            <div>
                <Dashboard />
            </div>
        );
    }

    // Render the home page for unauthenticated users
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center relative flex-grow">
                {/* Left Section */}
                <img
                    src={orbital}
                    alt="Orbital Background"
                    className="absolute opacity-10 animate-rotate"
                />

                <div className="text-center lg:w-1/2 p-6 rounded-lg shadow-lg mb-6 lg:mb-0 z-10 relative">
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-900 via-purple-500 to-red-500 bg-clip-text text-transparent mb-4">
                        Chatbot
                    </h1>
                    <h2 className="text-2xl font-semibold text-white mb-6">Welcome to the RAG LLM Model</h2>
                    <h3 className="text-lg text-white mb-8 max-w-[60%] mx-auto font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis tenetur cumque error quo vel placeat velit, ullam fuga vitae tempore possimus accusamus tempora corrupti nihil! Nisi molestiae veniam assumenda.
                    </h3>
                    <Link to="/dashboard">
                        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Right Section */}
                <div className="relative lg:w-1/2 flex flex-col items-center space-y-8">
                    {/* Bot Image */}
                    <div className="w-80 h-80 lg:w-96 lg:h-96 flex justify-center items-center">
                        <img
                            src={bot}
                            alt="Bot"
                            className="object-contain w-full h-full botImage"
                        />
                    </div>

                    {/* Typing Animation */}
                    <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                                <img
                                    src={
                                        typingStatus === "Human1"
                                            ? human1
                                            : typingStatus === "Human2"
                                            ? human2
                                            : bot
                                    }
                                    alt="Chat Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <TypeAnimation
                                sequence={[
                                    "Human1: Summarize this Pdf",
                                    2000, () => { setTypingStatus("Bot") },
                                    "Bot: Your content is based on Food...",
                                    2000, () => { setTypingStatus("Human2") },
                                    "Human2: What type questions are in this Pdf?",
                                    2000, () => { setTypingStatus("Bot") },
                                    "Bot: It contains mcqs on...",
                                    2000, () => { setTypingStatus("Human1") },
                                ]}
                                cursor={true}
                                wrapper="span"
                                repeat={Infinity}
                                style={{ color: 'white' }}
                                omitDeletionAnimation={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
