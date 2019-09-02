import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

export default props => {

    return (
        <View>
            <StatusBar translucent barStyle="light-content" />

            <View>
                <Text> Hi </Text>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({});
