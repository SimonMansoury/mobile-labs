import React from "react";
import {Text, View} from "react-native";
import {Video} from "expo-av";
import CustomButton from "../../../../CustomComponents/CustomButton";
import styles from "../../../../../Styles";

function LocalVideoPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>LOCAL VIDEO CONTAINER</Text>
            <Video
                style={styles.video}
                ref={video}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => {
                    console.log(status)
                    setStatus(() => status)
                }
                }
            />
            <CustomButton title={status.isPlaying ? 'PAUSE LOCAL VIDEO' : 'PLAY LOCAL VIDEO'} onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}/>
        </View>
    );
}

export default LocalVideoPlayer;
