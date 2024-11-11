// import React, {useEffect, useState} from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// export default function Protected({chidren, authentication=true}) {
//     const navigate = useNavigate()
//     const [loader, setLoader] = useState(true)
//     const authStatus = useSelector(state => state.auth.status )

//     useEffect(()=>{

//         // if(authStatus === true){
//         //     navigate("/")

//         // }
//         // else if(authStatus===false){
//         //     navigate('/login')
//         // }

//         if(authentication && authStatus !==authentication){
//             navigate('/login')
//         }
//         else if(!authentication && authStatus !== authentication ){
//             navigate('/')
//         }
//         setLoader(false)



//     },[authStatus, navigate, authentication])
//   return loader ? <h1>Loading...</h1>: {chidren}
// }



// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// export default function Protected({ children, authentication = true }) {
//   const navigate = useNavigate()
//   const authStatus = useSelector(state => state.auth.status)

//   useEffect(() => {
//     if (authentication && authStatus !== authentication) {
//       navigate('/login')
//     } else if (!authentication && authStatus !== authentication) {
//       navigate('/')
//     }
//   }, [authStatus, navigate, authentication])

//   return authStatus === undefined ? <h1>Loading...</h1> : children
// }



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // Assume your Redux store has this state

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
