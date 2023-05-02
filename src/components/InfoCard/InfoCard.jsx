import React, {useEffect, useState} from 'react'
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)
    const profileUserId = useParams();
    const user = useSelector((state) => state.authReducer.auth)
    const [profileUser, setProfileUser] = useState({})

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                console.log('Fetching')
                const profileUser = await UserApi.getUser((profileUserId))
                setProfileUser(profileUser)
            }
        }
        
    })

  return (
    <div className='Infocard'>
          <div className='infoHead'>
              <h4>Profile Info</h4>
          
             <div>
                <UilPen width="2rem" height="1.2rem" onClick = {()=>setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>
          <div className='info'>
              <span>
                  <b>Status </b>
              </span>
              <span>{ profileUser.relationship}</span>
          </div>
          <div className='info'>
              <span>
                  <b>Works at </b>
              </span>
              <span>{profileUser.worksAt}</span>
          </div>
          <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
