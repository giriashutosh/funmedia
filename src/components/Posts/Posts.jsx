import React, { useEffect } from 'react'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/PostAction'
const Posts = () => {
    const dispatch = useDispatch();
    const params = useParams()
    let { posts, loading} = useSelector((state) => state.postReducer)
    const { user }  = useSelector((state) => state.authReducer.authData)
    
    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    },[])

    if (!posts) return 'No Posts';
    if(params.id) posts = posts.filter((post) => post.userId === params.id)
    return (
        <div className='Posts'>
            {loading ? "Fetching Posts" :
                posts.map((post, id) => (
                    <Post data={post} key={id}  id={id} />
            )
        )}

        </div>
    )
}

export default Posts
