// import React from 'react';
// import { Container, Logo, LogOutBtn } from '../index';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileHeader from './ProfileHeader';  // Import the ProfileHeader component

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const user = useSelector((state) => state.auth.userData);
//   console.log(authStatus, user);

//   const navItems = [
//     { name: 'Home', slug: '/', active: !authStatus },
//     { name: 'Login', slug: '/login', active: !authStatus },
//     { name: 'Signup', slug: '/signup', active: !authStatus },
//     { name: 'History', slug: '/history', active: authStatus },
//     { name: 'Add url', slug: '/add-url', active: authStatus },
//   ];

//   return (
//     <>
//       {/* Conditionally render ProfileHeader if the user is logged in */}
//       {authStatus && user ? (
//         <ProfileHeader />
//       ) : (
//         <header className="py-3 shadow bg-gray-500">
//           <Container>
//             <nav className="flex">
//               <div className="mr-4">
//                 <Link to="/">
//                   <Logo width="70px" />
//                 </Link>
//               </div>
//               <ul className="flex ml-auto">
//                 {navItems.map((item) =>
//                   item.active ? (
//                     <li key={item.name}>
//                       <Link
//                         to={item.slug}
//                         className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                       >
//                         {item.name}
//                       </Link>
//                     </li>
//                   ) : null
//                 )}
//               </ul>
//             </nav>
//           </Container>
//         </header>
//       )}
//     </>
//   );
// }

// export default Header;



import React from 'react';
import { Container, Logo } from '../index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader'; // Import the ProfileHeader component

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: !authStatus },
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
                <button
                  onClick={() => navigate('/')}
                  className="bg-transparent border-none cursor-pointer"
                >
                  <Logo width="70px" />
                </button>
              </div>
              <ul className="flex ml-auto items-center">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="inline-block px-6 py-2 duration-200 hover:bg-opacity-90 hover:brightness-110 rounded-full bg-gray-800 text-white"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {!authStatus && (
                  <>
                    <li>
                      <button
                        onClick={() => navigate('/login')}
                        className="inline-block px-6 py-2 duration-200 hover:bg-opacity-90 hover:brightness-110 rounded-full bg-blue-500 text-white"
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate('/signup')}
                        className="inline-block px-6 py-2 duration-200 hover:bg-opacity-90 hover:brightness-110 rounded-full bg-green-500 text-white ml-2"
                      >
                        Signup
                      </button>
                    </li>
                  </>
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
