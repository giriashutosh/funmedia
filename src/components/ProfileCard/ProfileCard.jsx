import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileCard = ({location}) => {
    const {user}= useSelector((state) => state.authReducer.authData)
    console.log(user)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const posts = useSelector((state) => state.postReducer.posts);
    //console.log(posts)
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={user.coverPicture ? user.coverPicture : serverPublic + "defaultCover.jpg"} alt='coverImage' />
                <img src={user.profilePicture ?  user.profilePicture : serverPublic + 'defaultProfile.png'} alt='profileImage' />
            </div>
            <div className='ProfileName'>
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt ? user.worksAt : 'Write about yourself'}</span>
            </div>
            <div className='followStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{user.following.length}</span>
                        <span>followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {/* for profile page */}
                    {location === "profilePage" && (
                        <>
                            <div className='vl'></div>
                            <div className='follow'>
                                <span>{ posts.filter((post)=> post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {location === "profilePage" ? (""): (<span><Link to = {`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>My Profile</Link></span>)}

        </div>
    )
}

export default ProfileCard
