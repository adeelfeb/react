import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setLoginStatus, setUserData  } from '../store/authSlice';
import { Button, Input, Logo } from "./index";
import { useDispatch, useSelector } from "react-redux";
import authService from "../AserverAuth/auth";
import { useForm } from "react-hook-form";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    // Success and failure handlers for Google Login
    const handleGoogleSuccess = (credentialResponse) => {
        const { credential } = credentialResponse;
        authService.googleLogin({ tokenId: credential }).then(response => {
            console.log('Backend response:', response);
        }).catch(error => {
            console.error('Login failed:', error);
        });
    };

    const handleGoogleFailure = () => {
        console.error('Google Login Failed');
    };

    // Handle login attempt
    const login = async (data) => {
    setError("");  // Clear any previous errors
    try {
        const { accessToken, refreshToken } = await authService.login({
            emailOrUsername: data.email,  
            password: data.password
        });

        // console.log("The login response here", accessToken, refreshToken);

        const userData = await authService.getCurrentUser()
        // console.log("The login page data is:", userData)

        // Dispatch the user data to Redux store
        
        dispatch(setUserData(userData))
        dispatch(setLoginStatus(true));

        // Redirect to the dashboard after successful login
        navigate("/dashboard");

    } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
    }
};


    return (
        <div className='flex items-center justify-center w-full'>
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
                        <Input label="Email / Username" placeholder="Enter your email or username" type="text" {...register("email", { required: "Email or Username is required" })} />
                        <Input label="Password" type="password" placeholder="Enter your password" {...register("password", { required: "Password is required" })} />
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
