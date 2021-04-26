import * as React from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import styles from "../../../../../Styles";
import {Audio} from "expo-av";
import CustomButton from "../../../../CustomComponents/CustomButton";

export default function RemoteAudioPlayer() {
    const [isPlayed, setStatus] = React.useState(false);
    const [sound, setSound] = React.useState();
    const [soundUrl, setSoundUrl] = React.useState('');

    async function playRemoteSound() {
        if (soundUrl.length === 0) {
            Alert.alert('Empty URL', 'Please input URL');
            return;
        }

        try {
            console.log(1);
            const {sound} = await Audio.Sound.createAsync({uri: soundUrl});
            console.log(2);

            setSound(sound);

            if (isPlayed) {
                const status = await sound.getStatusAsync();
                console.log(status)
                await sound.stopAsync();
                setStatus(!isPlayed);
                return;
            }
            setStatus(!isPlayed);
            await sound.playAsync();

        } catch (e) {
            Alert.alert('Something was wrong', 'Please check an URL or paste another one');
            console.log(e)
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>REMOTE AUDIO PLAYER</Text>
            <View>
                <TextInput
                    placeholder={'Put url to remote audio'}
                    style={styles.textInput}
                    onChangeText={(text) => {
                        setSoundUrl(text)
                    }}
                />

                <CustomButton title={isPlayed ? 'STOP REMOTE AUDIO' : 'PLAY REMOTE AUDIO'}
                              onPress={playRemoteSound}/>
            </View>
        </View>
    );
}
