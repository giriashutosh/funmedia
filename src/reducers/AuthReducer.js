const AuthInitialState = {
    authData: null,
    loading: false,
    error: false,
    updateLoading: false
}

const authReducer = (state = AuthInitialState, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false }
        case "AUTH_SUCCESS":
            return { ...state, authData: action.data, loading: false, error: false }
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }
        default:
            return state;
    }
}

export default authReducer;