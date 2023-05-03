import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import FollowersCard from '../FollowersCard/FollowersCard'
const ProfileSide = () => {
  return (
    <div className='profileside'>
          <LogoSearch />
          <ProfileCard />
          <FollowersCard location = 'homepage'/>
    </div>
  )
}

export default ProfileSide
