// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <h1 className="font-bold bg-pink-300">This is what is !!@ {import.meta.env.VITE_APPWRITE_URL}</h1>
//     </>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        setError("Failed to load user data."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Always set loading to false at the end
      });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <h1 className="font-bold bg-pink-300">
          This is what is !!@ {import.meta.env.VITE_APPWRITE_URL}
        </h1>
      )}
    </div>
  );
}

export default App;
