import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Icon, ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import Material from "app/components/cards/Material";
import Resource from "app/resources";
import university from "../resources/university";
import Logo from "../components/icons/College";
import {connect} from "react-redux";

const Materials = props => {

        let {navigation, user} = props;
        let university = navigation.getParam("university");
        let college = navigation.getParam("college");

        if (navigation.getParam("me") == 1) {
            if (user) {
                university = user.university;
                college = user.college;
            } else {
                return <Text>Not Authenticated</Text>
            }
        }

        let [materials, setMaterials] = useState([]);
        let [loading, setLoading] = useState(true);

        useEffect(() => {

            Resource.material.get("/", {college_id: college.id}).then(materials => {
                setMaterials(materials.data);
                setLoading(false);
            });
        }, []);


        const _reload = (done) => {
            Resource.material.get("/", {college_id: college.id}).then(materials => {
                setMaterials(materials.data);
                done();
            });
        }

        const _render = () => {

            if (loading) {
                return (
                    <View style={styles.loader_wrapper}>
                        <ActivityIndicator style={styles.loader}/>
                    </View>
                );
            }

            if (materials.length) {
                return (
                    <ScrollView onReload={_reload} style={styles.boxes_wrapper}>

                        <View style={styles.boxes}>
                            {materials.map(material => {
                                return <Material key={material.id} material={material}/>
                            })}
                        </View>

                    </ScrollView>
                );
            } else {
                return (
                    <View style={styles.no_content}>
                        <Text style={styles.no_content_text}>
                            لا توجد مواد
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

                        <TouchableOpacity onPress={() => navigation.navigate("Colleges", {university})}
                                          style={styles.breadcrumb_item}>
                            <Text style={styles.breadcrumb_item_text}>{university.name}</Text>
                        </TouchableOpacity>

                        <View style={styles.breadcrumb_item}>
                            <Icon style={styles.breadcrumb_item_text} size={15} name={"ios-arrow-back"}/>
                        </View>

                        <View style={styles.breadcrumb_item}>
                            <Text style={styles.breadcrumb_item_text_active}>{college.name}</Text>
                        </View>

                    </View>

                    {_render()}

                </View>

            </View>
        );

    }
;


Materials.navigationOptions = (nav) => {

    return {

        tabBarLabel: "المواد",

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
})(Materials);
