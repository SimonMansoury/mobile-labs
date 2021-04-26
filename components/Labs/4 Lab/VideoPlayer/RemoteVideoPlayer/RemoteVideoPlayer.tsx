import React from "react";
import {Alert, Text, TextInput, View} from "react-native";
import {Video} from "expo-av";
import CustomButton from "../../../../CustomComponents/CustomButton";
import styles from "../../../../../Styles";

function RemoteVideoPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [videoUrl, setVideoUrl] = React.useState('');
    const [urlInputted, setUrl] = React.useState(false);

    async function openPlayerAndStartVideo() {
        try {
            if (videoUrl.length === 0 || videoUrl.substr(videoUrl.length - 4) !== '.mp4') {
                Alert.alert('Please paste valid URl');
                return;
            }
            setUrl(true);
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            {urlInputted ?
                <Video
                    style={styles.video}
                    ref={video}
                    source={{
                        uri: videoUrl,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={
                        status => {
                            console.log(status)
                            if (!status.isLoaded) {
                                //Alert.alert('Please paste valid URl');
                            }
                            setStatus(() => status)
                        }
                    }
                />
                : <View>
                </View>
            }
            <Text style={styles.baseText}>REMOTE VIDEO CONTAINER</Text>

            <TextInput
                placeholder={'Put url to remote audio'}
                style={styles.textInput}
                onChangeText={(text) => {
                    setVideoUrl(text)
                }}
            />
            <CustomButton title={status.isPlaying ? 'PAUSE REMOTE VIDEO' : 'PLAY REMOTE VIDEO'}
                          onPress={openPlayerAndStartVideo}/>
        </View>
    );
}

export default RemoteVideoPlayer;
