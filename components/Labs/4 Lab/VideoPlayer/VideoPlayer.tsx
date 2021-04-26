import React from "react";
import {Text, View} from "react-native";
import styles from "../../../../Styles";
import LocalVideoPlayer from "./LocalVideoPlayer/LocalVideoPlayer";
import RemoteVideoPlayer from "./RemoteVideoPlayer/RemoteVideoPlayer";
import Dash from "../../Dash";

function VideoPlayer() {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitleText}>VIDEO CONTAINER</Text>
            <LocalVideoPlayer/>
            <Dash/>
            <RemoteVideoPlayer/>
        </View>
    );
}

export default VideoPlayer;
