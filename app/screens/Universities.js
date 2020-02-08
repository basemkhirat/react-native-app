import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import University from "app/components/cards/University";
import Resource from "app/resources";
import Logo from 'app/components/icons/Universities';

const Universities = props => {

    let {navigation} = props;

    let [universities, setUniversities] = useState(props.universities.data);
    let [total, setTotal] = useState(props.universities.total);

    const _reload = (done) => {
        Resource.university.get("/").then(universities => {
            setUniversities(universities.data);
            setTotal(universities.total);
            done();
        });
    }

    const _render = () => {
        if (universities.length) {
            return (
                <ScrollView onReload={_reload} style={styles.boxes_wrapper}>

                    <View style={styles.boxes}>
                        {universities.map(university => {
                            return <University key={university.id} university={university}/>
                        })}
                    </View>

                </ScrollView>
            );
        } else if (!loading) {
            return (
                <View style={styles.no_content}>
                    <Text style={styles.no_content_text}>
                        لا توجد جامعات
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

                <View style={styles.page_title}>
                    <Text style={styles.page_title_text}>
                        الجامعات
                        ({total})
                    </Text>
                </View>

                {_render()}

            </View>
        </View>
    );

};

Universities.navigationOptions = (nav) => {
    return {
        tabBarLabel: "الجامعات",
        tabBarIcon: ({tintColor}) => {
            return (
                <Logo color={tintColor}></Logo>
            );
        }
    }
}


export default connect(state => {
    return {
        universities: state.app.universities
    }
})(Universities);
