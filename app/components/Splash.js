import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {Theme} from "app/constants";
import Resource from "app/resources";
import {store} from 'app/services/store';
import {connect} from 'react-redux';

const Splash = props => {

    let {startAsync, onFinish, onError} = props;

    useEffect(() => {

        let {user} = props;

        startAsync().then(data => {

            Resource.university.get("/").then(universities => {

                store.dispatch({
                    type: "universities",
                    payload: universities
                });

                onFinish(data);

            }).catch(error => {

            });

        }).catch((error) => {
            //
        })
    }, []);

    return (
        <View style={styles.splash_container}>
            <Image source={require("app/assets/loader.gif")}/>
            <ActivityIndicator style={styles.splash_loading}/>
        </View>
    );
}

const styles = StyleSheet.create({
    splash_container: {
        backgroundColor: Theme.dark_blue,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    splash_text: {
        color: "#bcbcbc"
    },

    splash_loading: {
        marginTop: 20
    }
});


export default connect(state => {
    return {
        user: state.auth.user
    }
})(Splash);
