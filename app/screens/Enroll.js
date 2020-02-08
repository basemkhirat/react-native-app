import React from 'react';
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import I18n from 'app/services/I18n';
import {ActivityIndicator, Button, SnackBar} from "app/elements";
import {Theme} from "app/constants";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Resource from "app/resources";
import Alert from 'app/components/Alert';
import AwesomeAlert from "react-native-awesome-alerts";

class Enroll extends React.Component {

    state = {
        loading: false,
        photo_payload: "",
        error: null,
        done: false
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert(I18n.t('camera_roll_permission_needed'));
        }
    }

    pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        this.setState({
            photo_payload: "data:image/jpeg;base64," + result.base64
        });
    };


    save() {

        this.setState({loading: true, error: null});

        let {navigation} = this.props;
        let course = navigation.getParam("course");

        let data = {
            photo_data: this.state.photo_payload
        };

        Resource.course.post("/" + course.slug + "/enroll", data)
            .then(user => {
                this.setState({
                    error: null,
                    done: true,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    loading: false
                });
            })
    }

    render() {

        let course = this.props.navigation.getParam("course");

        return (

            <View style={styles.wrapper}>

                <StatusBar barStyle="light-content"/>

                <Text style={styles.course_title}>
                    {course.title}
                </Text>

                <View style={styles.form_avatar_container}>

                    <Text style={styles.description}>
                        لكي تقوم بالإشتراك في هذا الكورس يلزم الدفع باحدي ماكينات الصرف الآلي
                    </Text>

                    <View style={styles.price}>
                        <View style={styles.price_title}>
                            <Text>
                                قيمة الإشتراك
                            </Text>
                        </View>

                        <View style={styles.price_value}>
                            <Text>
                                100 LE
                            </Text>
                        </View>
                    </View>

                    <View style={styles.image_container}>
                        { this.state.photo_payload ? (
                            <Image source={{uri: this.state.photo_payload}}
                                   style={styles.form_avatar_image}/>
                        ) : (
                            <Image source={require("app/assets/wasl.png")} style={styles.form_avatar_image}/>
                        )
                        }
                    </View>

                    <TouchableOpacity style={styles.change_avatar}
                                      onPress={() => this.pickImage()}>
                        <Text style={styles.change_avatar_text}>
                            رفع صورة الإيصال
                        </Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.submitter}>
                    {this.state.loading ? <ActivityIndicator/> :
                        <Button style={styles.button} title="الإشتراك" onPress={() => this.save()}/>}
                </View>

                <SnackBar type="error" visible={this.state.error ? true : false}>
                    {this.state.error}
                </SnackBar>

                <Alert
                    show={this.state.done}
                    message="ستصلك رسالة تأكيد الإشتراك علي البريد الإلكتروني خلال ساعات عقب التأكد من عميلة الدفع"
                    confirmText="الرجع للكورسات"
                    onConfirmPressed={() => {
                        this.props.navigation.replace("Courses")
                    }}
                ></Alert>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        alignItems: "center",
        padding: 30
    },

    change_avatar: {},

    change_avatar_text: {
        color: Theme.dark_blue
    },

    course_title: {
        color: Theme.dark_blue,
        fontSize: 18,
        fontWeight: "bold"
    },

    form_avatar_container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },

    form_avatar_image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },

    submitter: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },

    button: {
        width: 200,
        color: "#ccc",
        backgroundColor: Theme.dark_blue
    },

    description: {
        textAlign: "left",
        color: "#828282",
        fontSize: 15,
        fontWeight: "bold"
    },

    price: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",
        marginTop: 25
    },

    price_title: {
        color: "#515d82",
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 10
    },

    price_value: {
        marginHorizontal: 10,
        color: "#363734",
        fontSize: 15,
        fontWeight: "bold"
    },

    image_container: {
        justifyContent: "center",
        alignItems: "center",
        height: 200
    }

})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Enroll);
