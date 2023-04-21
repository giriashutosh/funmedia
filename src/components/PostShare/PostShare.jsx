import React from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import './PostShare.css'
const PostShare = () => {
  return (
    <div className='PostShare'>
          <img src={ProfileImage} alt='' />
          <div>
              <input type='text' placeholder="What's happening" />
              <div className='postOptions'>
                  <div className='option'>
                      <UilScenery />
                      Photo
                  </div>
                  <div className='option'>
                      <UilPlayCircle />
                      Video
                  </div>
                  <div className='option'>
                      <UilLocationPoint />
                      Location
                  </div>
                  <div className='option'>
                      <UilSchedule />
                      Schedule
                  </div>
                  <button className='button ps-button'>Share</button>
              </div>
          </div>
    </div>
  )
}

export default PostShare
