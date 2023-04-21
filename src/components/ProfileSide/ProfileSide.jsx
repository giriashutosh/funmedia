import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import FollwersCard from '../FollowersCard/FollowersCard'
const ProfileSide = () => {
  return (
    <div className='profileside'>
          <LogoSearch />
          <ProfileCard />
          <FollwersCard/>
    </div>
  )
}

export default ProfileSide
