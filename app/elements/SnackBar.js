import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from "app/constants";

class SnackBar extends React.Component {

    state = {
        visible: false
    }

    componentDidMount() {
        this.setState({
            visible: this.props.visible
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.visible != this.props.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    render() {

        return (
            <View {...this.props} style={[this.props.style, styles.container, {opacity: this.state.visible ? 1 : 0}]}>
                <Text style={[this.props.textStyle, styles.text]}>
                    {this.props.children}
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        bottom: 0,
        bottom: 40,
        width: "90%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: Theme.error_color,
        borderRadius: 5
    },


    text: {
        color: "white"
    }
});

export default SnackBar;
