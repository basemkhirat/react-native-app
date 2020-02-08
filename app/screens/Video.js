import React, {useState} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import {connect} from "react-redux";
import WebView from 'react-native-webview';
import Chapter from "../components/cards/Chapter";
import {Header} from "../components/Header";

const Video = props => {

    let {navigation, user} = props;

    let chapter = navigation.getParam("chapter");
    let video = navigation.getParam("video");
    let [loading, setLoading] = useState(false);
    let [active, setActive] = useState(0);


    const activate = (index) => {
        if (index == active) {
            setActive(-1);
        } else {
            setActive(index);
        }
    }

    const _render = () => {

        if (loading) {
            return (
                <View style={styles.loader_wrapper}>
                    <ActivityIndicator style={styles.loader}/>
                </View>
            );
        }

        return (
            <ScrollView onReload={this._reload} style={styles.boxes_wrapper}>

                <View style={s.webview_canvas}>
                    <WebView
                        style={s.webview}
                        source={{uri: video.embed_url}}
                    />
                </View>

                <View style={[styles.accordion]}>
                    {
                        [chapter].map((chapter, i) => {
                            return <Chapter key={chapter.id}
                                            index={i}
                                            chapter={chapter}
                                            is_active={i == active}
                                            onPress={() => activate(i)}
                            />
                        })
                    }
                </View>

            </ScrollView>
        );
    };

    return (

        <View style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <View style={styles.search}>
                <SearchBar/>
            </View>

            <View style={[styles.page, s.page]}>

                <View style={[styles.breadcrumb, s.breadcrumb]}>

                    <View style={styles.page_title}>
                        <Text style={styles.page_title_text}>
                            {video.title}
                        </Text>
                    </View>

                </View>

                {_render()}

            </View>
        </View>
    );

}


const s = StyleSheet.create({
    breadcrumb: {
        padding: 10,
        height: "auto",
        marginTop: 20
    },
    webview_canvas: {
        width: "100%",
        height: 300,
        backgroundColor: "#000000"
    },
    webview: {
        marginTop: -30,
        marginBottom: -20,
        height: 300
    },
    page: {
        padding: 0
    }
});


export default connect(state => {
    return {
        user: state.auth.user
    }
})(Video);
