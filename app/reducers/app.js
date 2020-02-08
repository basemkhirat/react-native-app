const initialState = {
    locale: "ar",
    isRTL: true,
    screen: "Universities",
    universities: [],
    enroll: false
}

export default (state = initialState, action) => {

    if (action.type == "locale") {
        return {
            ...state,
            locale: action.locale,
            isRTL: action.locale == "ar" ? true : false
        }
    } else if (action.type == "universities") {
        return {
            ...state,
            universities: action.payload
        }
    }  else if (action.type == "enroll") {
        return {
            ...state,
            enroll: action.payload
        }
    } else if (action.type == "screen") {
        return {
            ...state,
            screen: action.payload
        }
    }

    return state;
}


