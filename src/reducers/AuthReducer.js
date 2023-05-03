const AuthInitialState = {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false
}

const authReducer = (state = AuthInitialState, action) => {
    switch (action.type) {
        //FOR LOGIN AND SIGN UP
        case "AUTH_START":
            return { ...state, loading: true, error: false }
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return { ...state, authData: action.data, loading: false, error: false }
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }
        
        //for updating user
        case "UPDATING_START":
         return {...state, updateLoading: false, error: false}
        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.data}))
            return {...state,authData: action.data, updateLoading:false, error: false}
        case "UPDATING_FAIL":
            return {...state, updateLoading: true, error: true}
        
        //for logout
        case "LOG_OUT":
            localStorage.clear();
            return {...state, authData: null, loading: false, error: false, updateLoading: false}
        default:
            return state;
    }
}

export default authReducer;