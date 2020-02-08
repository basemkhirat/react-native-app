import React from 'react';
import AwesomeAlert from "react-native-awesome-alerts";

const Alert = props => {

    let {navigation, enroll} = props;

    return (
        <AwesomeAlert
           // show={true}
            showProgress={false}
            messageStyle={styles.message}
            message="لابد من الإشتراك لمشاهدة هذا الكورس"
            confirmText="الإشتراك الآن"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmButtonColor="#1b68e2"
            showCancelButton={false}
            {...props}
        />
    );
}


const styles = {
    message: {
        fontSize: 18,
        textAlign: "center"

    }
};

export default Alert;
