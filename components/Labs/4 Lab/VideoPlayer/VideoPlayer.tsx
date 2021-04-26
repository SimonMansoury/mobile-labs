import React from "react";
import {Text, View} from "react-native";
import styles from "../../../../Styles";
import {Video} from "expo-av";
import CustomButton from "../../../CustomComponents/CustomButton";

function VideoPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <Text style={styles.subTitleText}>VIDEO CONTAINER</Text>
            <Video
                style={styles.video}
                ref={video}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <CustomButton title={status.isPlaying ? 'PAUSE VIDEO' : 'PLAY VIDEO'} onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}/>
        </View>
    );
}

export default VideoPlayer;