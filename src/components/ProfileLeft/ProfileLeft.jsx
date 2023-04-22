import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'

import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import '../ProfileSide/ProfileSide.css'

const ProfileLeft = () => {
  return (
    <div className='profileside'>
          <LogoSearch />
          <InfoCard />
          <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
