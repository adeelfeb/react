import React, { useState } from 'react';
import authService from '../AserverAuth/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const create = async (data) => {
        setError("");
        try {
            // Include avatar and cover image if they are selected
            const userData = await authService.createAccount({
                ...data,
                avatar,
                coverImage
            });

            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(login(currentUser));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    // Handle file input changes
    const handleAvatarChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    const handleCoverImageChange = (e) => {
        setCoverImage(e.target.files[0]);
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("fullname", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Username: "
                            placeholder="Enter your username"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        {/* File input for avatar */}
                        <div>
                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                                Avatar (Optional)
                            </label>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="mt-1 block w-full text-sm text-gray-500"
                            />
                        </div>
                        {/* File input for cover image */}
                        <div>
                            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
                                Cover Image (Optional)
                            </label>
                            <input
                                type="file"
                                id="coverImage"
                                name="coverImage"
                                accept="image/*"
                                onChange={handleCoverImageChange}
                                className="mt-1 block w-full text-sm text-gray-500"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
