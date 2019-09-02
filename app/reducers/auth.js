const initialState = {
    token: null,
    user: null
}

export default (state = initialState, action) => {

    if (action.type == "token") {
        return {
            ...state,
            token: action.token
        }
    }

    if (action.type == "user") {
        return {
            ...state,
            user: action.user
        }
    }

    return state;
}
