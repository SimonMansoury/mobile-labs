import React from "react";
import {Button, Text, View} from "react-native";
import styles from "../../../Styles";
import {Video} from "expo-av";

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
            <View style={styles.button}>
                <Button
                    title={status.isPlaying ? 'PAUSE VIDEO' : 'Play video'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}

export default VideoPlayer;
