import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Right} from 'app/components/Header';
import {connect} from 'react-redux';
import I18n from 'app/services/I18n';
import SettingItem from 'app/components/SettingItem';
import {ActivityIndicator, Button, SnackBar, TextInput} from "app/elements";
import {Theme} from "app/constants";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Resource from "app/resources";

class Profile extends React.Component {

    state = {
        loading: false,
        user: {
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            photo_payload: ""
        },
        error: null,
        message: null
    }

    static navigationOptions = (nav) => {
        return {
            header: <Header {...nav} hasBack={true}/>
        }
    };

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
            user: {
                ...this.state.user,
                photo_payload: "data:image/jpeg;base64," + result.base64
            }
        });
    };

    renderAvatar() {

        if (this.state.user.photo_payload) {
            return <Image source={{uri: this.state.user.photo_payload}}
                          style={styles.form_avatar_image}/>;
        }

        if (this.props.user.photo) {
            return <Image source={{uri: this.props.user.photo.thumbnails.default}}
                          style={styles.form_avatar_image}/>;
        } else {
            return <Image source={require("app/assets/user.jpg")} style={styles.form_avatar_image}/>;
        }
    }

    save() {

        this.setState({loading: true});

        this.setState({error: null});
        this.setState({message: null});

        Resource.user.put("/" + this.props.user.id, this.state.user)
            .then(user => {
                this.setState({error: null});
                Resource.auth.user().then(() => {
                    this.setState({message: I18n.t('profile_saved')});
                })
            })
            .catch(error => {
                this.setState({error: error[0]});
            })
            .then(() => {
                this.setState({loading: false});
            });

    }

    render() {

        return (

            <View style={styles.wrapper}>

                <View style={styles.form_avatar_container}>

                    {this.renderAvatar()}

                    <TouchableOpacity style={styles.change_avatar}
                                      onPress={() => this.pickImage()}>
                        <Text style={styles.change_avatar_text}>{I18n.t('change_avatar')}</Text>
                    </TouchableOpacity>

                </View>

                <SettingItem title={I18n.t("first_name")}>
                    <TextInput defaultValue={this.props.user.first_name}
                               onChangeText={first_name => this.setState({
                                   user: {
                                       ...this.state.user,
                                       first_name: first_name
                                   }
                               })}
                               placeholder={I18n.t("first_name")}
                    />
                </SettingItem>

                <SettingItem title={I18n.t("last_name")}>
                    <TextInput defaultValue={this.props.user.last_name}
                               onChangeText={last_name => this.setState({
                                   user: {
                                       ...this.state.user,
                                       last_name: last_name
                                   }
                               })}
                               placeholder={I18n.t("last_name")}
                               style={styles.input}
                    />
                </SettingItem>

                <View style={styles.submitter}>
                    {this.state.loading ? <ActivityIndicator/> :
                        <Button style={styles.button} title={I18n.t("save")} onPress={() => this.save()}/>}
                </View>

                <SnackBar type="error" visible={this.state.error ? true : false}>
                    {this.state.error}
                </SnackBar>

                <SnackBar type="success" visible={this.state.message ? true : false}>
                    {this.state.message}
                </SnackBar>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        alignItems: "center"
    },

    change_avatar: {
        marginTop: 15
    },

    change_avatar_text: {
        color: Theme.primary_color
    },

    form_avatar_container: {
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },

    form_avatar_image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    submitter: {
        justifyContent: "center",
        alignItems: "center",
        height: 60
    },

    button: {
        width: 200
    }
})

const mapStateToProps = state => {
    return {
        locale: state.app.locale,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Profile);
