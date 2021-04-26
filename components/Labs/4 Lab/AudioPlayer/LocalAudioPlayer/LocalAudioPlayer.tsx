import * as React from 'react';
import {Alert, Text, View} from 'react-native';
import styles from "../../../../../Styles";
import {Audio} from "expo-av";
import {AudioSound} from "../../Models/Sound";
import * as DocumentPicker from "expo-document-picker";
import CustomButton from "../../../../CustomComponents/CustomButton";

export default function LocalAudioPlayer() {
    const [isPlayed, setStatus] = React.useState(false);
    const [currentAudio, setCurrentAudio] = React.useState<AudioSound | null>(null);
    const [sound, setSound] = React.useState();

    const pickAFile = React.useCallback(async () => {
        try {
            const file = await DocumentPicker.getDocumentAsync({
                type: 'audio/*',
                copyToCacheDirectory: true,
            });

            if (file.type !== "cancel") {
                console.log(file);
                setCurrentAudio(new AudioSound(file.name, file.uri));
            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    async function playSound() {
        if (currentAudio == null) {
            Alert.alert('Please choose file to play');
            return;
        }

        try {
            const {sound} = await Audio.Sound.createAsync({uri: currentAudio.path});
            setSound(sound);
            if (isPlayed) {
                await sound.stopAsync();
                setStatus(!isPlayed);
                return;
            }
            setStatus(!isPlayed);
            await sound.playAsync();
        } catch (e) {
            Alert.alert('Something was wrong', 'Please check a file or choose another one');
            console.log(e)
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>LOCAL AUDIO PLAYER</Text>
            <View>
                <Text>Now is playing: {currentAudio?.title}</Text>
            </View>
            <View>
                <CustomButton title={isPlayed ? 'STOP LOCAL AUDIO' : 'PLAY LOCAL AUDIO'}
                              onPress={playSound}/>
                <CustomButton title="PICK AN AUDIO"
                              onPress={pickAFile}/>
            </View>
        </View>
    );
}
