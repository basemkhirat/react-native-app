import React from 'react';
import {Button} from 'react-native';

export default (props) => {
    return (
        <Button title="Click me" onPress={props.onPress}/>
    );
}
