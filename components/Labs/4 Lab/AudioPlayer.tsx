import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Audio} from 'expo-av';
import styles from "../../../Styles";
import {useCallback, useState} from "react";

export default function AudioPlayer() {
    const [sound, setSound] = React.useState();
    const [isPlayed, setStatus] = React.useState(false);

    async function playSound() {
        console.log(isPlayed)
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(
            require('../../../assets/Hello.mp3')
        );
        setSound(sound);
        sound.playAsync();
        setStatus(!isPlayed);
        console.log(isPlayed)
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
            <Button title='play'
                    onPress={playSound}/>
        </View>
    );
}
