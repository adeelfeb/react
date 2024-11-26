import React from 'react';
import { Container, Logo, LogOutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader';  // Import the ProfileHeader component

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  console.log(authStatus, user);

  const navItems = [
    { name: 'Home', slug: '/', active: !authStatus },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'History', slug: '/history', active: authStatus },
    { name: 'Add url', slug: '/add-url', active: authStatus },
  ];

  return (
    <>
      {/* Conditionally render ProfileHeader if the user is logged in */}
      {authStatus && user ? (
        <ProfileHeader />
      ) : (
        <header className="py-3 shadow bg-gray-500">
          <Container>
            <nav className="flex">
              <div className="mr-4">
                <Link to="/">
                  <Logo width="70px" />
                </Link>
              </div>
              <ul className="flex ml-auto">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <Link
                        to={item.slug}
                        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
          </Container>
        </header>
      )}
    </>
  );
}

export default Header;


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import authService from '../../AserverAuth/auth';

// function ProfileHeader() {
//   const user = useSelector((state) => state.auth.userData);
//   const dispatch = useDispatch()
//   const logoutHandler = ()=>{
//     authService.logout().then(()=>{
//       dispatch(logout())
//       navigate('/login'); // Redirect to the login page
//     })
//   }

//   if (!user) return null; // Ensure user data exists before rendering
  
//   return (
//     <header className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto">
//         {/* Cover Image */}
//         <div className="relative">
//           <img
//             src={user.coverImage || 'https://res.cloudinary.com/dk06hi9th/image/upload/v1732198259/dbkm9wciwhs8njns81de.jpg'}
//             alt="Cover"
//             className="w-full h-48 object-cover rounded-lg"
//           />
//           {/* Profile Image in Circle */}
//           <div className="absolute left-0 right-0 bottom-0 flex justify-center">
//             <img
//               src={user.avatar || 'https://res.cloudinary.com/dk06hi9th/image/upload/v1732198388/zgwzdyhy3nldkk2inxpl.jpg'}
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-white -mb-12 object-cover"
//             />
//           </div>
//         </div>

//         {/* Profile Info & Buttons */}
//         <div className="text-center mt-10">
//           <h1 className="text-3xl font-semibold">{user.fullname}</h1>
//           <p className="text-xl text-gray-300">@{user.username}</p>
//           <div className="mt-6">
//             <Link
//               to="/history"
//               className="px-6 py-2 bg-blue-500 text-white rounded-full mr-4 hover:bg-blue-600"
//             >
//               History
//             </Link>
//             <button
//               onClick={logoutHandler}
//               className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default ProfileHeader;
