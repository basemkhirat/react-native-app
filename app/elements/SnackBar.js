import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {Theme} from "app/constants";

class SnackBar extends React.Component {

    types = {
        success: Theme.success_color,
        error: Theme.error_color,
        warning: Theme.warning_color
    }

    state = {
        visible: false,

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

        let default_container_style = {...styles.container};

        if (this.props.type) {
            default_container_style.backgroundColor = this.types[this.props.type];
        }else{
            default_container_style.backgroundColor = "#000000";
        }

        return (
            <SafeAreaView style={styles.wrapper}>
                <View {...this.props}
                      style={[this.props.style, default_container_style, {opacity: this.state.visible ? 1 : 0}]}>
                    <Text style={[this.props.textStyle, styles.text]}>
                        {this.props.children}
                    </Text>
                </View>
            </SafeAreaView>

        );

    }
}

const styles = StyleSheet.create({

    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 20,
        flex: 1,

    },

    container: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 5
    },

    text: {
        color: "white",
        textAlign: "left"
    }
});

export default SnackBar;
