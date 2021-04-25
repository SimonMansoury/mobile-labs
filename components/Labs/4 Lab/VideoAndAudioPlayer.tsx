import React from "react";
import {View} from "react-native";
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import styles from "../../../Styles";

export default function VideoAndAudioPlayer() {
    return (
        <View style={styles.tabView}>
            <VideoPlayer></VideoPlayer>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <AudioPlayer></AudioPlayer>
        </View>
    );
}