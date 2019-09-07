import React from 'react';
import {Ionicons} from '@expo/vector-icons'

export default props => {

    let name = props.name;

    if (!name) {
        return null;
    }

    let size = props.size ? props.size : 27;
    let color = props.color ? props.color : "#000000";

    return (
        <Ionicons {...props} name={name} size={size} color={color}/>
    );

}
