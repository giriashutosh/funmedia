import React, {useState} from 'react'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import './Post.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'


const Post = ({ data }) => {
  const user = useSelector((state) => state.authReducer.authData)
  const [likes, setLikes] = useState(data.likes.length)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const dispatch = useDispatch()
  const handleClick = () => {
    likePost(data._id, user._id)
    //dispatch({type: "LIKE_POST"})
    setLiked((prev) => !prev)
    likes ? setLikes((prev) => prev-1) : setLikes((prev) => prev+1)
  }

  return (
    <div className='Post'>
          <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : " "} alt='' />
          <div className='postReact'>
        <img src={liked ? Heart : NotLike} alt='' onClick={ handleClick} />
              <img src={Comment} alt='' />
              <img src={Share} alt='' />
          </div>
          <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} likes</span>
          <div className='detail'>
              <span><b>{data.name}</b></span>
              <span>{data.desc}</span>
          </div>
    </div>
  )
}

export default Post
