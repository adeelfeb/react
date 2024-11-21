import React from 'react';
import { Container, Logo, LogOutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileHeader from './ProfileHeader';  // Import the ProfileHeader component

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  console.log(authStatus, user)
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
      {authStatus && user && <ProfileHeader />}

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
    </>
  );
}

export default Header;
