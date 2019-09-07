const initialState = {
    locale: "en",
    isRTL: false
}

export default (state = initialState, action) => {

    if (action.type == "locale") {
        return {
            ...state,
            locale: action.locale,
            isRTL: action.locale == "ar" ? true : false
        }
    }

    return state;
}


