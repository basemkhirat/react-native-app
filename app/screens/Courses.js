import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import Resource from "app/resources";
import Course from "app/components/cards/Course";
import Logo from "../components/icons/Courses";

const Courses = props => {

    let {navigation, user} = props;

    let [loading, setLoading] = useState(true);
    let [courses, setCourses] = useState([]);
    let [total, setTotal] = useState(0);
    let [q, setQ] = useState(navigation.getParam("q"));

    useEffect(() => {

        let params = {};

        if (navigation.getParam("me") == 1) {
            if (user) {
                params.user_id = user.id;
            } else {
                params.user_id = 0;
            }
        }

        params.search = q;

        Resource.course.get("/", params).then(courses => {
            setCourses(courses.data);
            setTotal(courses.total);
            setLoading(false);
        });
    }, [q]);

    const _reload = (done) => {

        let params = {};

        if (navigation.getParam("me") == 1) {
            if (user) {
                params.user_id = user.id;
            }
        }

        Resource.course.get("/", params).then(courses => {
            setCourses(courses.data);
            setTotal(courses.total);
            done();
        });
    }

    const getTitle = () => {

        if(navigation.getParam("q")){
            return " نتائج البحث "
        }

        if(navigation.getParam("me") == 1){
            return " كورساتي "
        } else{
            return  " الكورسات "
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

        if (courses.length) {
            return (
                <ScrollView onReload={_reload} style={styles.boxes_wrapper}>

                    <View style={styles.boxes}>
                        {courses.map(course => {
                            return <Course key={course.id} course={course}/>
                        })}
                    </View>

                </ScrollView>
            );
        } else {
            return (
                <View style={styles.no_content}>
                    <Text style={styles.no_content_text}>
                        لا توجد كليات
                    </Text>
                </View>
            );
        }
    }

    return (

            <View style={styles.container}>


                <StatusBar barStyle="light-content"/>

                <View style={styles.search}>
                    <SearchBar
                        defaultValue={navigation.getParam("q")}
                        onChangeText={key => setQ(key)}
                    />
                </View>

                <View style={styles.page}>

                    <View style={styles.page_title}>
                        <Text style={styles.page_title_text}>
                            {getTitle()}
                            ({total})
                        </Text>
                    </View>

                    {_render()}

                </View>

            </View>

    );

};

Courses.navigationOptions = (nav) => {
    return {

        tabBarLabel: "الكورسات",

        tabBarIcon: ({tintColor}) => {
            return (
                <Logo color={tintColor}></Logo>
            );
        }
    }
}

export default connect(state => {
    return {
        user: state.auth.user
    }
})(Courses);
