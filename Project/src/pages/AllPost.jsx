import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
    const [Posts, setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
    },[])
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost