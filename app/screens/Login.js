import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {Auth} from 'app/store/actions'

class Login extends React.Component {

    render() {

        setTimeout(() => {
            this.props.loader("hi. Iam loading");
        }, 3000);

        return (
            <Button title={this.props.navigation.getParam("title")} onPress={() => this.props.navigation.goBack()}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loader(title) {
            dispatch(Auth.loader(title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

