import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className='Profile'>
          <ProfileLeft />
          <div className='profile-center'>
              <ProfileCard/>
              <PostSide/>
          </div>
          <RightSide/>
    </div>
  )
}

export default Profile
