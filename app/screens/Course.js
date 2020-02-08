import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import {ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import Resource from "app/resources";
import {connect} from "react-redux";
import Chapter from "app/components/cards/Chapter";
import {Header} from "../components/Header";
import Alert from 'app/components/Alert';

const Course = props => {

    let {navigation, user} = props;
    let course = navigation.getParam("course");
    let [loading, setLoading] = useState(true);
    let [chapters, setChapters] = useState([]);
    let [active, setActive] = useState(0);

    useEffect(() => {
        Resource.course.get("/" + course.slug).then(course => {
            setChapters(course.chapters);
            setLoading(false);
        });

    }, []);

    const _reload = (done) => {
        Resource.course.get("/" + course.slug).then(course => {
            setChapters(course.chapters);
            done();
        });
    }

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

        if (chapters.length) {
            return (
                <ScrollView onReload={_reload} style={styles.boxes_wrapper}>
                    <View style={styles.accordion}>
                        {
                            chapters.map((chapter, i) => {
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
        } else {
            return (
                <View style={styles.no_content}>
                    <Text style={styles.no_content_text}>
                        لا توجد أقسام لهذا الكورس
                    </Text>
                </View>
            );
        }
    }

    return (

        <View style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <View style={styles.search}>
                <SearchBar/>
            </View>

            <View style={styles.page}>

                <View style={styles.breadcrumb}>

                    <View style={styles.page_title}>
                        <Text style={styles.page_title_text}>
                            {course.title}
                        </Text>
                    </View>

                </View>

                {_render()}

            </View>

            <Alert
                show={!course.is_enrolled}
                onConfirmPressed={() => {
                    navigation.navigate("Enroll", {course})
                }}
            />

        </View>
    );

};

export default connect(state => {
    return {
        user: state.auth.user
    }
})(Course);
