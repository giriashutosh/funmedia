import * as UserApi from "../api/UserRequest"

export const UpdateUser = (id, formData) => async(dispatch) => {
 dispatch({type: "UPDATING_START"})
 try{
    const {data} = await UserApi.updateUser(id, formData)
    console.log(data)
    dispatch({type: "UPDATING_SUCCESS", data})
 }catch(error){
    console.log(error)
    dispatch({type: "UPDATING_FAIL"})
 }
}