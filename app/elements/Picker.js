import React from 'react';
import RNPickerSelect from "react-native-picker-select";

export default props => {
    return (
           <RNPickerSelect
               style={{
                   inputAndroid: {
                       backgroundColor:"white"
                   }
               }}
               InputAccessoryView={() => null}
               useNativeAndroidPickerStyle={false}
               placeholder={{}}
               {...props}
           />
    );
}
