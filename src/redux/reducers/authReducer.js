const INITIAL_STATE = {
    authResponse: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN": return {
            ...state,
            authResponse: action.payload
        }

        case "LOGOUT" : return {
            ...state,
            authResponse: null
        }

        default: return state
    }
}

export default authReducer