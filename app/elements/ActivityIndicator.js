import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme} from 'app/constants';

export default props => {
    return (
        <ActivityIndicator size="small" color={Theme.primary_color} {...props}/>
    );
}
