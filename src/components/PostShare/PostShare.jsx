import React, {useState, useRef} from 'react'

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from 'react-redux'

import './PostShare.css'
import { uploadImage, uploadPost } from '../../actions/UploadAction';
const PostShare = () => {
    const  user  = useSelector((state) => state.authReducer.authData)
    const loading = useSelector((state) => state.postReducer.uploading);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const desc = useRef()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log(serverPublic)
    console.log(user)
    //handle Image Change
    const onImageChange = (event) => {
        if (event.target && event.target.files[0]) {
            let img = event.target.files[0]; 
            setImage(img)
           
        }
    }

  // handle post upload
    const handlePostUpload = async (e) => {
        e.preventDefault();

        //post data
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }

        //if there is an image with post
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
    }
  return (
    <div className='PostShare'>
          <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt='' />
          <div>
              <input type='text' placeholder="What's happening" required ref={desc} />
              <div className='postOptions'>
                  <div className='option' style={{ color: "var(--photo" }} onClick={() => imageRef.current.click()
                  }>
                      <UilScenery />
                      Photo
                  </div>
                  <div className='option' style={{color: "var(--video)"}}>
                      <UilPlayCircle />
                      Video
                  </div>{" "}
                  <div className='option' style={{color: "var(--location)"}}>
                      <UilLocationPoint />
                      Location
                  </div>{" "}
                  <div className='option' style = {{color: "var(--schedule)"}}>
                      <UilSchedule />
                      Schedule
                  </div>
                  <button
                      className='button ps-button'
                      onClick={handlePostUpload}
                      disabled = {loading}
                  >{loading ? 'uploading' : 'Share'}
                  </button>
                  <div style={{display: 'none'}}>
                      <input type='file' name = "myImage" ref={imageRef} onChange={onImageChange}></input>
                  </div>
              </div>
              {image && (
                  <div className='previewImage'>
                      <UilTimes onClick={() => setImage(null)} />
                      <img src={URL.createObjectURL(image)} alt='preview'/>
                  </div>
              )}
          </div>
    </div>
  )
}

export default PostShare
