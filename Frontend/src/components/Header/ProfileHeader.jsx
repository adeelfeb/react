import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../../AserverAuth/auth';

function ProfileHeader() {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
      navigate('/login'); // Redirect to the login page
    })
  }

  if (!user) return null; // Ensure user data exists before rendering
  
  return (
    <header className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        {/* Cover Image */}
        <div className="relative">
          <img
            src={user.coverImage || 'https://res.cloudinary.com/dk06hi9th/image/upload/v1732198259/dbkm9wciwhs8njns81de.jpg'}
            alt="Cover"
            className="w-full h-48 object-cover rounded-lg"
          />
          {/* Profile Image in Circle */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-center">
            <img
              src={user.avatar || 'https://res.cloudinary.com/dk06hi9th/image/upload/v1732198388/zgwzdyhy3nldkk2inxpl.jpg'}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white -mb-12 object-cover"
            />
          </div>
        </div>

        {/* Profile Info & Buttons */}
        <div className="text-center mt-10">
          <h1 className="text-3xl font-semibold">{user.fullname}</h1>
          <p className="text-xl text-gray-300">@{user.username}</p>
          <div className="mt-6">
            <Link
              to="/history"
              className="px-6 py-2 bg-blue-500 text-white rounded-full mr-4 hover:bg-blue-600"
            >
              History
            </Link>
            <button
              onClick={logoutHandler}
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
