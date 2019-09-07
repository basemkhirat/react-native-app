import React from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import {Theme} from 'app/constants';

class Switch extends React.Component {

    state = {
        notification: false
    }

    render() {

        let value = this.props.value ? this.props.value : false;

        return (

            <SwitchToggle
                switchOn={value}
                containerStyle={{
                    width: 50,
                    height: 15,
                    borderRadius: 25,
                    backgroundColor: '#f5f5f5',
                    padding: 5,
                }}
                circleStyle={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    backgroundColor: "#cccccc"
                }}

                circleColorOff='#cccccc'
                circleColorOn={Theme.primary_color}
                duration={200}

                {...this.props}
            />

        );
    }
}


export default Switch;
