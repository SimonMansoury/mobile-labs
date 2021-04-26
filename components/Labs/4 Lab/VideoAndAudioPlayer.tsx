import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "../../../Styles";
import Dash from "../Dash";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export default function VideoAndAudioPlayer() {
    return (
        <ScrollView style={styles.tabView}>
            <Text style={styles.titleText}>4 LAB</Text>
            <VideoPlayer/>
            <Dash/>
            <AudioPlayer/>
            <View style={{marginBottom: 100}}>
                <Dash/>
            </View>
        </ScrollView>
    );
}
