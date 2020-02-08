import React from 'react';
import {
    ActivityIndicator,
    Animated,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Button, Picker, SnackBar, TextInput} from 'app/elements';
import styles from 'app/styles/auth';
import I18n from 'app/services/I18n';
import Resource from 'app/resources';
import {connect} from 'react-redux';

class Register extends React.Component {

    state = {
        loading: false,
        user: {
            email: "basem@gmail.com",
            password: "admin",
            first_name: null,
            university_id: null,
            college_id: null,
            year_id: null,
            phone: null
        },
        error: null,
        form_translate_y: new Animated.Value(50),
        brand_translate_y: new Animated.Value(-50),
        colleges: [],
        years: []
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.form_translate_y, {
                toValue: 0
            }),
            Animated.timing(this.state.brand_translate_y, {
                toValue: 0
            }),
        ]).start();
    }

    register() {

        this.setState({loading: true});

        Resource.auth.register(this.state.user).then(user => {
            this.setState({error: null});
            this.setState({loading: false});
            this.props.navigation.replace("TabsNavigator");
        }).catch(error => {
            this.setState({loading: false});
            this.setState({error});
        });

    }

    loginByFacebook() {

        alert("Not yet");
        return;

        Resource.auth.loginByFacebook().then(data => {
            this.props.navigation.navigate("Universities");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }

    loginByGoogle() {


        alert("Not yet");
        return;

        Resource.auth.loginByGoogle().then(data => {
            this.props.navigation.navigate("Universities");
        }).catch(error => {
            this.setState({error: error[0]});
        })
    }


    setUser(key, value) {

        let user = this.state.user;

        user[key] = value;

        this.setState(user);
    }

    getColleges(university_id) {

        this.setUser("university_id", university_id);

        Resource.college.get("/", {university_id}).then(colleges => {
            this.setState({colleges: colleges.data});
        });
    }

    getYears(college_id) {

        this.setUser("college_id", college_id);

        Resource.year.get("/", {college_id}).then(years => {
            console.log(years.data);
            this.setState({years: years.data});
        });
    }

    render() {

        let universities = this.props.universities.data;
        let {colleges, years} = this.state;

        return (

            <SafeAreaView style={styles.wrapper}>

                <StatusBar barStyle="dark-content"/>

                <View style={styles.container}>

                    <View style={styles.title}>
                        <Text style={styles.title_text}>
                            أنشي حساب جديد
                        </Text>
                    </View>

                    <View style={styles.social_buttons}>

                        <Button style={styles.twitter_button} onPress={() => this.loginByFacebook()}>
                            <Text style={styles.twitter_button_text}>Twitter</Text>
                        </Button>

                        <Button style={styles.google_button} onPress={() => this.loginByGoogle()}>
                            <Text style={styles.google_button_text}>Google</Text>
                        </Button>

                    </View>

                    <View style={styles.form_separator}>

                        <View style={styles.form_separator_line}/>

                        <View style={[styles.form_separator_text_wrapper]}>
                            <Text style={styles.form_separator_text}>
                                أو سجل
                            </Text>
                        </View>

                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>

                        <Animated.View style={[styles.form, {transform: [{translateY: this.state.form_translate_y}]}]}>

                            <TextInput value={this.state.user.first_name}
                                       onChangeText={first_name => this.setUser('first_name', first_name)}
                                       placeholder={I18n.t("first_name")}
                                       style={styles.input}
                            />

                            <TextInput value={this.state.user.email}
                                       onChangeText={email => this.setUser('email', email)}
                                       placeholder={I18n.t("email")}
                                       style={styles.input}
                            />

                            <TextInput value={this.state.user.password}
                                       onChangeText={password => this.setUser("password", password)}
                                       placeholder={I18n.t("password")}
                                       secureTextEntry={true}
                                       style={styles.input}
                            />

                            <TextInput value={this.state.user.phone}
                                       onChangeText={phone => this.setUser("phone", phone)}
                                       placeholder={"رقم التليفون"}
                                       style={styles.input}
                            />

                            <View style={styles.picker}>
                                <Picker
                                    style={{
                                        inputAndroid: styles.picker_select_android,
                                        inputIOS: styles.picker_select_ios
                                    }}
                                    placeholder={{label: "إختر الجامعة"}}
                                    onValueChange={university_id => this.getColleges(university_id)}
                                    items={universities.map(university => ({
                                        label: university.name,
                                        value: university.id
                                    }))}/>
                            </View>


                            <View style={styles.picker}>
                                <Picker
                                    style={{
                                        inputAndroid: styles.picker_select_android,
                                        inputIOS: styles.picker_select_ios
                                    }}
                                    placeholder={{label: "إختر الكلية"}}
                                    onValueChange={college_id => this.getYears(college_id)}
                                    items={colleges.map(college => ({
                                        label: college.name,
                                        value: college.id
                                    }))}/>
                            </View>

                            <View style={styles.picker}>
                                <Picker
                                    style={{
                                        inputAndroid: styles.picker_select_android,
                                        inputIOS: styles.picker_select_ios
                                    }}
                                    placeholder={{label: "إختر السنة الدراسية"}}
                                    onValueChange={year_id => this.setUser("year_id", year_id)}
                                    items={years.map(year => ({
                                        label: year.name,
                                        value: year.id
                                    }))}/>
                            </View>

                            <View style={styles.loading_button}>
                                {this.state.loading ? <ActivityIndicator size="small" color="blue"/> :
                                    <Button title={I18n.t('login')} style={styles.button}
                                            onPress={this.register.bind(this)}/>}
                            </View>

                        </Animated.View>

                        <Animated.View style={[styles.form_extra]}>

                            <View style={styles.links}>

                                <TouchableOpacity onPress={() => this.props.navigation.replace("Login")}>
                                    <Text style={styles.second}>{I18n.t("already_have_account")}</Text>
                                </TouchableOpacity>
                            </View>

                        </Animated.View>


                    </ScrollView>

                    <SnackBar type="error" visible={this.state.error ? true : false}>
                        {this.state.error}
                    </SnackBar>

                </View>


            </SafeAreaView>
        );
    }
}


export default connect(state => {
    return {
        user: state.auth.user,
        screen: state.app.screen,
        universities: state.app.universities
    }
})(Register);
