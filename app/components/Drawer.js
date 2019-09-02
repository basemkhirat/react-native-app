import React from 'react';
import {DrawerItems, SafeAreaView, ScrollView} from 'react-navigation';
import {StyleSheet, Text, View} from 'react-native';
import styles from 'app/styles/drawer';

export default (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.box}>
                <Text>Welcome</Text>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
