import React, {useEffect, useState} from 'react'
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest'
import { logOut } from '../../actions/AuthAction';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)
    const profileUserId = useParams();
    console.log(profileUserId)
    const user = useSelector((state) => state.authReducer.authData)
    const [profileUser, setProfileUser] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId.id === user._id) {
                setProfileUser(user)
            } else {
                console.log('Fetching')
                const profileUser = await UserApi.getUser((profileUserId))
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    },[user])
  
  const logoutHandler = () => {
    dispatch(logOut())
  }

  return (
    <div className='Infocard'>
          <div className='infoHead'>
              <h4>Profile Info</h4>
          
             <div>
                <UilPen width="2rem" height="1.2rem" onClick = {()=>setModalOpened(true)}/>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data = {user}/>
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
          <button className='button logout-button' onClick = {logoutHandler}>Logout</button>
    </div>
  )
}

export default InfoCard
