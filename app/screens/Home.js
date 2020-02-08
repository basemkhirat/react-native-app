import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import ICN from 'app/components/icons/icon';
import {Icon, ScrollView} from 'app/elements';
import SearchBar from "app/components/SearchBar";
import styles from 'app/styles/page';
import University from "app/components/cards/University";

class Home extends React.Component {

    static navigationOptions = (nav) => {
        return {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => {
                return (
                    <ICN color={tintColor}></ICN>
                );
            }
        }
    };


    render() {

        let {navigation} = this.props;

        return (
            <View style={styles.container}>

                <View style={styles.search}>
                    <SearchBar/>
                </View>

                <View style={styles.page}>

                    <ScrollView style={styles.page}>

                        <View style={styles.boxes}>

                            <Text>Home</Text>

                        </View>

                    </ScrollView>

                </View>

            </View>
        );
    }
}

export default Home;
