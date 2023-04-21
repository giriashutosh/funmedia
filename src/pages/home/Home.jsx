import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
const Home = () => {
  return (
    <div className='home'>
          <ProfileSide/>
          <div className='post'>postSide</div>
          <div className='right'>RightSide</div>
    </div>
  )
}

export default Home
