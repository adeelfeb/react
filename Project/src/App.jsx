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
import { login, logout } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
      })
      .finally(() => {
        setLoading(false); // Ensure loading state is set to false after the check
      });
  }, [dispatch]);

  return (
    <>
      <h1 className="font-bold bg-pink-300">
        This is what is !!@ {import.meta.env.VITE_APPWRITE_URL}
      </h1>
    </>
  );
}

export default App;
