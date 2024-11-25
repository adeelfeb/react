import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from "./index";
import { useDispatch, useSelector } from "react-redux";
import authService from "../AserverAuth/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const authStateBefore = useSelector((state) => state.auth);


    // Handle login attempt
    const login = async (data) => {
        setError("");  // Clear any previous errors
        try {
            
            const session = await authService.login({
                emailOrUsername: data.email,  
                password: data.password
            });
            if (session) {
                // If login is successful, retrieve the current user data
                const userData = await authService.getCurrentUser();
                console.log("After getting the current user", userData);
          
                if (userData) {
                  // Log the state of the auth store before dispatching
                  console.log("Auth state before dispatching:", authStateBefore);
          
                  // Dispatch the user data to Redux store
                  dispatch(authLogin(userData));
          
                  // Log the state of the auth store after dispatching
                  console.log("Auth state after dispatching:", authStateBefore);
                }
          
                // Redirect to home page after successful login
                navigate("/"); // Assuming you have a navigate function from `react-router-dom`
              }
            }

        catch (error) {
            // Set error message if login fails
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
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email / Username: "
                            placeholder="Enter your email or username"
                            type="text"  
                            {...register("email", {
                                required: "Email or Username is required",
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
