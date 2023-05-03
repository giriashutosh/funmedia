import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { UpdateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened,data}) {
  //console.log(data)
  const theme = useMantineTheme();
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch();
  const param = useParams();
  //console.log(formData.firstname)
  //Input change handler
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  //Image change handler
   const onImageChange = (event) => {
      if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        event.target.name === "profileImage" 
        ? setProfileImage(img) : setCoverImage(img)
      }
   }

  //form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    let UserData = formData;

    if(profileImage){
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name",fileName);
      data.append("file",profileImage);
      UserData.profilePicture = fileName;
      try{
        dispatch(uploadImage(data));
      }catch(error){
        console.log(error);
      }
    }
    if(coverImage){
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try{
        dispatch(uploadImage(data));
      }catch(err){
        console.log(err);
      }
    }
    dispatch(UpdateUser(param.id, UserData))
    setModalOpened(false)
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={submitHandler}>
        <h3>Your info</h3>

        <div>
          <input
            value = {formData.firstname}
            type="text"
            className="infoInput"
            name="Firstname"
            placeholder="First Name"
            onChange={handleChange}
          />

          <input
            value={formData.lastname}
            type="text"
            className="infoInput"
            name="Lastname"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            value={formData.worksAt}
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            value={formData.livesIn}
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="LIves in"
            onChange={handleChange}
          />

          <input
            value={formData.country}
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            value={formData.relationship}
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
            name= "relationship"
            onChange={handleChange}
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImage'onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>

        <button className="button infoButton" type="submit">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
