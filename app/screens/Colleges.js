import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Icon, ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import College from "app/components/cards/College";
import Resource from "app/resources";
import university from "../resources/university";

const Colleges = props => {

    let {navigation} = props;
    let [loading, setLoading] = useState(true);
    let [colleges, setColleges] = useState([]);
    let university = navigation.getParam("university");

    useEffect(() => {
        Resource.college.get("/", {university_id: university.id}).then(colleges => {
            setColleges(colleges.data);
            setLoading(false);
        });
    }, []);

    const _reload = (done) => {
        Resource.college.get("/", {university_id: university.id}).then(colleges => {
            setColleges(colleges.data);
            done();
        });
    }

    const _render = () => {

        if (loading) {
            return (
                <View style={styles.loader_wrapper}>
                    <ActivityIndicator style={styles.loader} />
                </View>
            );
        }

        if (colleges.length) {
            return (
                <ScrollView onReload={_reload} style={styles.boxes_wrapper}>

                    <View style={styles.boxes}>
                        {colleges.map(college => {
                            return <College key={college.id} college={college}/>
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
                <SearchBar/>
            </View>

            <View style={styles.page}>

                <View style={styles.breadcrumb}>

                    <TouchableOpacity onPress={() => navigation.navigate("Universities")}
                                      style={styles.breadcrumb_item}>
                        <Text style={styles.breadcrumb_item_text}>الجامعات</Text>
                    </TouchableOpacity>

                    <View style={styles.breadcrumb_item}>
                        <Icon style={styles.breadcrumb_item_text} size={15} name={"ios-arrow-back"}/>
                    </View>

                    <View style={styles.breadcrumb_item}>
                        <Text style={styles.breadcrumb_item_text_active}>{university.name}</Text>
                    </View>

                </View>

                {_render()}

            </View>

        </View>
    );

};

export default connect(state => {
    return {
        state: state,
        user: state.auth.user,
        token: state.auth.token,
        locale: state.app.locale,
        direction: state.app.direction
    }
})(Colleges);
