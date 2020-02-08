import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "app/styles/page";
import {Icon} from "app/elements";
import Video from "app/components/cards/Video";

const Chapter = props => {

    let {chapter, index, is_active} = props;

    let display = {
        display: is_active ? "flex" : "none"
    }

    return (
        <View style={styles.accordion_item}>

            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.accordion_item_head}>

                    <Text style={styles.accordion_item_head_text}>
                        {index + 1}. {chapter.title} ({chapter.videos.length})
                    </Text>

                    {is_active ?
                        <Icon style={styles.accordion_item_head_icon} name={"ios-arrow-up"}/>
                        :
                        <Icon style={styles.accordion_item_head_icon} name={"ios-arrow-down"}/>
                    }

                </View>
            </TouchableOpacity>

            <View style={[styles.accordion_item_content, display]}>
                {
                    chapter.videos.map((video, i) => {
                        return (
                            <Video key={video.id} index={i + 1} video={video} chapter={chapter}/>
                        )
                    })
                }

            </View>

        </View>
    );
}

export default Chapter;
