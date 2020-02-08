import React, {useState} from 'react';
import {ActivityIndicator, Share, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import {connect} from "react-redux";
import SettingItem from 'app/components/SettingItem';
import I18n from "../services/I18n";
import Resource from "app/resources";
import * as WebBrowser from 'expo-web-browser';
import * as StoreReview from 'expo-store-review';
import {Header, Center, Item} from "app/components/Header";

const About = props => {

    const share = async () => {
        try {

            const result = await Share.share({
                message: 'سعودي ميد هاوس أكاديمي',
                url: "https://saudi-mha.com"
            });


            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
           //
        }
    };

    return (

        <View style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <View style={styles.page}>

                <View style={s.boxes_wrapper}>



                    <View style={s.image}>

                        <Image resizeMode="contain" style={styles.logo} source={require("app/assets/logo_detailed.png")}/>

                    </View>

                    <View style={s.description}>

                        <Text style={s.description_text}>
                            سعودي ميد هاوس أكاديمي
                        </Text>

                        <Text style={s.description_text}>
                            إصدار 1.0
                        </Text>

                    </View>


                    <View style={s.items}>

                        <SettingItem title="تقييم التطبيق" icon="md-star"
                                     onPress={() => StoreReview.requestReview()}/>

                        <SettingItem title="مشاركة التطبيق" icon="md-share"
                                     onPress={() => share()}/>

                        <SettingItem title="الموقع الإلكتروني" icon="md-globe"
                                     onPress={() =>  WebBrowser.openBrowserAsync('https://saudi-mha.com') }/>

                    </View>

                </View>

            </View>
        </View>
    );

}


const s = StyleSheet.create({

    boxes_wrapper: {
        justifyContent: "center",
        alignItems: "center"
    },

    image: {
        height: 150,
        justifyContent: "center"
    },

    description: {
        height: 100,
    },

    description_text: {
        textAlign: "center",
        height: 30,
        fontWeight: "bold",
        color: "grey"
    },

    items: {
        width: "80%"
    }
});

About.navigationOptions = (nav) => {

    let Center = () => {
        return (
            <Text style={styles.header_title}>
                عن التطبيق
            </Text>
        );
    }

    return {
        header: (
            <Header {...nav} right="none">
                <Center></Center>
            </Header>
        )
    }
};

export default connect(state => {
    return {
        user: state.auth.user
    }
})(About);
