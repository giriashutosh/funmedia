import React, {useState, useRef} from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

import './PostShare.css'
const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target && event.target.files[0]) {
            let img = event.target.files[0]; 
            setImage(img);
        }
    }

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
                  <div style={{display: 'none'}}>
                      <input type='file' ref={imageRef} onChange={onImageChange}></input>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default PostShare
