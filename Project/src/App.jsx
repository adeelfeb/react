// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import authService from './appwrite/auth';
// import { login, logout } from './store/authSlice';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import { Outlet } from 'react-router-dom';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching current user:", error);
//         setError("Failed to load user data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [dispatch]);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
//       {/* Header */}
//       <Header />

//       {/* Main Content Area */}
//       <main className="flex flex-grow flex-col items-center justify-center px-4 py-8 bg-white shadow-md rounded-lg m-4">
//         {loading ? (
//           <p className="text-blue-600 text-lg animate-pulse">Loading...</p>
//         ) : error ? (
//           <p className="text-red-600 bg-red-100 p-2 rounded-lg">
//             Error: {error}
//           </p>
//         ) : (
//           <h1 className="text-2xl font-bold bg-pink-200 p-4 rounded-lg shadow">
//             Welcome! URL: {import.meta.env.VITE_APPWRITE_URL}
//           </h1>
//         )}
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        setError("Failed to load user data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center px-4 py-8 bg-white shadow-md rounded-lg m-4">
        {loading ? (
          <p className="text-blue-600 text-lg animate-pulse">Loading...</p>
        ) : error ? (
          <p className="text-red-600 bg-red-100 p-2 rounded-lg">
            Error: {error}
          </p>
        ) : (
          <>
            
            <Outlet /> {/* Render child routes here */}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;





// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './App.css'
// import authService from "./appwrite/auth"
// import { login, logout } from "./store/authSlice"
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }))
//         } else {
//           dispatch(logout())
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching current user:", error)
//         setError("Failed to load user data.")
//       })
//       .finally(() => setLoading(false))
//   }, [dispatch])

//   return (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <main className="flex flex-grow flex-col items-center justify-center px-4 py-8 bg-white shadow-md rounded-lg m-4">
//           {loading ? (
//             <p className="text-blue-600 text-lg animate-pulse">Loading...</p>
//           ) : error ? (
//             <p className="text-red-600 bg-red-100 p-2 rounded-lg">
//               Error: {error}
//             </p>
//           ) : (
//             <Outlet /> // This will render the child components based on the route
//           )}
//         </main>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App





