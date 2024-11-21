// // index.js


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root') // Ensure this ID matches your HTML file
// );


//----------------Now there is the routing issue here
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';// Ensure this path is correct
// import App from './App';
// import './index.css'; //

// main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import store from './store/store';
// import App from './App';
// import './index.css';




// ReactDOM.render(

//   <Provider store={store}>
//     <BrowserRouter> {/* Wrap the app in BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import { AuthLayout } from './components/index.js'

// import Signup from './pages/Signup.jsx'
// import Login from './pages/Login.jsx'
// import AddPost from './pages/AddPost.jsx'
// import EditPost from "./pages/EditPost";

// import Post from "./pages/Post";

// import AllPosts from './pages/AllPost.jsx';

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     children: [
// //         {
// //             path: "/",
// //             element: <Home />,
// //         },
// //         {
// //             path: "/login",
// //             element: (
// //                 <AuthLayout authentication={false}>
// //                     <Login />
// //                 </AuthLayout>
// //             ),
// //         },
// //         {
// //             path: "/signup",
// //             element: (
// //                 <AuthLayout authentication={false}>
// //                     <Signup />
// //                 </AuthLayout>
// //             ),
// //         },
// //         {
// //             path: "/all-posts",
// //             element: (
// //                 <AuthLayout authentication>
// //                     {" "}
// //                     <AllPosts />
// //                 </AuthLayout>
// //             ),
// //         },
// //         {
// //             path: "/add-post",
// //             element: (
// //                 <AuthLayout authentication>
// //                     {" "}
// //                     <AddPost />
// //                 </AuthLayout>
// //             ),
// //         },
// //         {
// //             path: "/edit-post/:slug",
// //             element: (
// //                 <AuthLayout authentication>
// //                     {" "}
// //                     <EditPost />
// //                 </AuthLayout>
// //             ),
// //         },
// //         {
// //             path: "/post/:slug",
// //             element: <Post />,
// //         },
// //     ],
// // },
// // ])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <Signup />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout authentication={true}>
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-post",
//         element: (
//           <AuthLayout authentication={true}>
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout authentication={true}>
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ],
//   },
// ]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <RouterProvider router={router}/>
//     </Provider>
//   </React.StrictMode>,
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { AuthLayout } from './components'


import AddPost from './pages/AddPost';
import Signup from './pages/Signup'
import EditPost from './pages/EditPost';
import Login from './pages/Login'

import Post from './pages/Post';

import AllPosts from './pages/AllPost';
import InputURL from './pages/InputURL.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/history",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-url",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <InputURL />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>,
)
