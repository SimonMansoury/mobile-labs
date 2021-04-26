import React from "react";
import {Alert, Text, View} from "react-native";
import {Video} from "expo-av";
import CustomButton from "../../../../CustomComponents/CustomButton";
import styles from "../../../../../Styles";
import * as DocumentPicker from "expo-document-picker";

function LocalVideoPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [videoUrl, setVideoUrl] = React.useState('');
    const [urlInputted, setUrlInputted] = React.useState(false);

    const pickAFile = React.useCallback(async () => {
        try {
            const file = await DocumentPicker.getDocumentAsync({
                type: 'video/*',
                copyToCacheDirectory: true,
            });

            if (file.type !== "cancel") {
                console.log(file);
                console.log(file.uri)

                setVideoUrl(file.uri);

                console.log(videoUrl)

                if (videoUrl.length === 0 || videoUrl.substr(videoUrl.length - 4) !== '.mp4') {
                    Alert.alert('Please take another file');
                    return;
                }
                setUrlInputted(true);
            }

        } catch (err) {
            console.error(err);
        }
    }, []);

    async function openPlayerAndStartVideo() {
        try {
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>LOCAL VIDEO CONTAINER</Text>
            {urlInputted ?
                <View>
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
                                }
                                setStatus(() => status)
                            }
                        }
                    />

                    <CustomButton title={status.isPlaying ? 'PAUSE local VIDEO' : 'PLAY local VIDEO'}
                                  onPress={openPlayerAndStartVideo}/>
                </View>

                : <View>
                </View>
            }

            <CustomButton title="PICK Video"
                          onPress={pickAFile}/>
        </View>
    );
}

export default LocalVideoPlayer;
