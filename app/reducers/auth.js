const initialState = {
    loading: "default"
}

export default (state = initialState, action) => {

    if (action.type == "loader") {
        return {
            ...state,
            loading: action.title
        }
    }

    return state;
}
