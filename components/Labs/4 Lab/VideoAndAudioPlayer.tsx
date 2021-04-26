import React from "react";
import {ScrollView, Text, View} from "react-native";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import styles from "../../../Styles";

export default function VideoAndAudioPlayer() {
    return (
        <ScrollView style={styles.tabView}>
            <Text style={styles.titleText}>4 LAB</Text>
            <VideoPlayer/>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <AudioPlayer/>
        </ScrollView>
    );
}
