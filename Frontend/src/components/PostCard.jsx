// import React from 'react'
// import appwriteService from '../appwrite/config'
// import {Link} from 'react-router-dom'



// function PostCard({ $id, title, featuredImage }) {

//   return (
//     <Link to={`/post/${$id}`}>
//     <div className='w-full bg-gray-100 rounded-xl p-4'>
//         <div className='w-full justify-center mb-4'>
//             <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
//         </div>
//         <h2
//         className='text-xl font-bold'>{title}</h2>
//     </div>
//     </Link>
//   )
// }

// export default PostCard



import React from 'react'
// import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  // Placeholder image URL
  const placeholderImageUrl = "https://source.unsplash.com/featured/?nature";

  return (
    // <Link to={`/post/${$id}`}>
    //   <div className='w-full bg-gray-100 rounded-xl p-4'>
    //     <div className='w-full justify-center mb-4'>
    //       <img
    //         src={featuredImage ? appwriteService.getFilePreview(featuredImage) : placeholderImageUrl}
    //         alt={title}
    //         className='rounded-xl'
    //       />
    //     </div>
    //     <h2 className='text-xl font-bold'>{title}</h2>
    //   </div>
    // </Link>
    <h1>Hi From PostCard</h1>
  )
}

export default PostCard
