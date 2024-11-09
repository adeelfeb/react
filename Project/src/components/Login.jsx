// Import necessary modules and components
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

// Define the Login component
function Login() {
    // React Router's useNavigate hook helps programmatically navigate to different routes
    const navigate = useNavigate();
    // Redux's useDispatch hook allows dispatching actions to the Redux store
    const dispatch = useDispatch();
    // useForm hook from react-hook-form provides a way to register inputs and handle form submission
    const { register, handleSubmit } = useForm();
    // useState to manage error messages (initially set to an empty string)
    const [error, setError] = useState('');

    // Define the login function, which will be called on form submission
    const login = async (data) => {
        setError(""); // Clear any previous errors
        try {
            // Attempt to log the user in with the provided email and password (from form data)
            const session = await authService.login(data);

            // Check if a session was successfully created
            if (session) {
                // Retrieve the current user's data after the session is established
                const userData = await authService.getCurrentUser();

                // If user data was successfully fetched, dispatch the login action to Redux
                if (userData) dispatch(authLogin(userData));

                // Use navigate to programmatically redirect the user to the home page ('/')
                navigate('/');
            }
        } catch (error) {
            // If there's an error during login, update the error state to show the error message
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            {/* Container for the form */}
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                {/* Logo and introductory text */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Logo component for branding */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don't have any account?&nbsp;
                    {/* Link to the Signup page */}
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {/* Show error message if there's an error */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                {/* Form element with handleSubmit, which triggers the login function upon submission */}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        {/* Email Input field with validation for required and valid email pattern */}
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        {/* Password Input field with validation for required */}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {/* Button to submit the form, which triggers handleSubmit */}
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
