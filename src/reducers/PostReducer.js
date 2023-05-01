const PostIntialState = {
    posts: null,
    loading: false,
    error: false,
    uploading: false
}

const postReducer = (state = PostIntialState, action) => {
    switch (action.type) {
        //belong to PostShare.jsx
        case "UPLOAD_START":
            return { ...state, uploading: true, error: false }
        case "UPLOAD_SUCCESS":
            return { ...state, posts: [action.data, ...state.posts], error: false, uploading: false, } 
        case "UPLOAD_FAIL":
            return{...state, error: true, uploading: false}
        default:
            return state
    }
}

export default postReducer