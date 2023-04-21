import React from 'react'
import './FollowerCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className='followerCard'>
      <h3> Who is following you</h3>
      {Followers.map((follower, id) =>
       (
        <div className='follower'>
          <div>
            <img src={follower.img} alt='' className='followerImage' />
            <div className='name'>
              <span>{follower.name}</span>
              <span>@{ follower.username}</span>
            </div>
          </div>
          <button className='button fc-button'>
            Follow
          </button>
        </div>
      ))}
    </div>
  )
}

export default FollowersCard
