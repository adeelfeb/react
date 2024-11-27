import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setLoginStatus, setUserData } from '../store/authSlice';
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../AserverAuth/auth";
import { useForm } from "react-hook-form";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    // Success and failure handlers for Google Login
    const handleGoogleSuccess = async (credentialResponse) => {
        const { credential } = credentialResponse;
        setLoading(true); // Start loading
        try {
            const response = await authService.googleLogin({ tokenId: credential });
            console.log('Backend response:', response);
            
            // Assuming successful login also retrieves user data
            const userData = await authService.getCurrentUser();
            dispatch(setUserData(userData));
            dispatch(setLoginStatus(true));

        } catch (error) {
            console.error('Login failed:', error);
            setError(error.response ? error.response.data.message : error.message);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleGoogleFailure = () => {
        console.error('Google Login Failed');
    };

    // Handle login attempt
    const login = async (data) => {
        setError(""); // Clear any previous errors
        setLoading(true); // Start loading
        try {
            const { accessToken, refreshToken } = await authService.login({
                emailOrUsername: data.email,
                password: data.password
            });

            const userData = await authService.getCurrentUser();

            // Dispatch the user data to Redux store
            dispatch(setUserData(userData));
            dispatch(setLoginStatus(true));

            // Redirect to the dashboard after successful login
            navigate("/dashboard");
        } catch (error) {
            setError(error.response ? error.response.data.message : error.message);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            {loading && ( // Conditional rendering for loading screen
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
                    <div className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                </div>
            )}

            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input 
                            label="Email / Username" 
                            placeholder="Enter your email or username" 
                            type="text" 
                            {...register("email", { required: "Email or Username is required" })} 
                        />
                        <Input 
                            label="Password" 
                            type="password" 
                            placeholder="Enter your password" 
                            {...register("password", { required: "Password is required" })} 
                        />
                        <Button type="submit" className="w-full">Sign in</Button>

                        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                                useOneTap
                                redirectUri={import.meta.env.VITE_GOOGLE_REDIRECT_URI}
                            />
                        </GoogleOAuthProvider>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;