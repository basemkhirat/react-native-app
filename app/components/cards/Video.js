import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "app/styles/page";
import {Image} from "react-native-expo-image-cache";
import {withNavigation} from "react-navigation";

const _getTime = seconds => {

    let sec_num = parseInt(seconds, 10);

    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
}

const Video = props => {

    let {video, chapter, index} = props;

    return (
        <View style={styles.video_row}>

            <View style={styles.video_image}>
                <Image
                    style={{width: "100%", height: "100%"}}
                    resizeMode="cover"
                    uri={"https://i.vimeocdn.com/video/848720085_640.jpg"}
                    preview={{color: "#ccc"}}
                />
            </View>

            <View style={styles.video_details}>

                <TouchableOpacity onPress={() => props.navigation.navigate("Video", {chapter, video})}>
                    <Text style={styles.video_title}>
                        {index}. {video.title}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.video_length}>
                    {_getTime(video.length)}
                </Text>
            </View>
        </View>
    );
}

export default withNavigation(Video);
