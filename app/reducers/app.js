const initialState = {
    locale: "en",
    direction: "ltr"
}

export default (state = initialState, action) => {

    if (action.type == "locale") {
        return {
            ...state,
            locale: action.locale,
            direction: action.locale == "ar" ? "rtl" : "ltr"
        }
    }

    return state;
}

