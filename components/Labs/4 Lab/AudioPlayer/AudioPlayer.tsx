import * as React from 'react';
import {Text, View} from 'react-native';
import styles from "../../../../Styles";
import LocalAudioPlayer from "./LocalAudioPlayer/LocalAudioPlayer";
import RemoteAudioPlayer from "./RemoteAudioPlayer/RemoteAudioPlayer";
import Dash from "../../Dash";

export default function AudioPlayer() {

    return (
        <View style={styles.container}>
            <Text style={styles.subTitleText}>AUDIO CONTAINER</Text>
            <View>
                <View>
                    <RemoteAudioPlayer/>
                </View>
                <Dash/>
                <View>
                    <LocalAudioPlayer/>
                </View>
            </View>
        </View>
    );
}
