import * as UploadApi from "../api/UploadRequest"
export const uploadImage = (data) => async (dispatch) => {
    try {
        console.log("Image Upload started")
        await UploadApi.uploadImage(data)
        console.log("Image Uploaded successfully")
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({type: "UPLOAD_START"})
    console.log("Upload start")
    try {
        const newPost = await UploadApi.uploadPost(data)
        console.log("upload sucessfully")
        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log("Error aa gya he" + error)
        dispatch({type: "UPLOAD_FAIL"})
    }
}

