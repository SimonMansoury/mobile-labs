import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {Audio} from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import styles from "../../../Styles";
import {AudioSound} from "./Models/Sound";

export default function AudioPlayer() {
    const [sound, setSound] = React.useState();
    const [isPlayed, setStatus] = React.useState(false);
    const [currentAudio, setCurrentAudio] = React.useState<AudioSound | null>(null);

    async function playSound() {
        if (currentAudio == null) return;

        const {sound} = await Audio.Sound.createAsync({uri: currentAudio.path});
        setSound(sound);
        if (isPlayed) {
            await sound.stopAsync();
            setStatus(!isPlayed);
            return;
        }
        setStatus(!isPlayed);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const pickAFile = React.useCallback(async () => {
        try {
            const file = await DocumentPicker.getDocumentAsync({
                type: 'audio/*',
                copyToCacheDirectory: true,
            });

            if (file.type !== "cancel") {
                console.log(file);
                setCurrentAudio(new AudioSound(file.name, file.uri));

                await playSound();
            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.subTitleText}>AUDIO CONTAINER</Text>
            <View>
                <Text style={styles.baseText}>Select sound to play</Text>
                <Text>Now is playing: {currentAudio?.title}</Text>
            </View>
            <View>
                <View style={styles.button}>
                    <Button title={isPlayed ? 'STOP AUDIO' : 'PLAY AUDIO'}
                            onPress={playSound}/>
                </View>
                <View style={styles.button}>
                    <Button title="PICK AN AUDIO"
                            onPress={pickAFile}/>
                </View>
            </View>
        </View>
    );
}
