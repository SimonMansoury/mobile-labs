import {Text, TextInput, TouchableHighlight, View} from "react-native";
import styles from "../../../Styles";
import React from "react";

function Lab3Tab() {

    return (
        <View style={styles.tabView}>
            <Text style={styles.titleText}>3 LAB</Text>
            <Text style={styles.baseText}>
                Work with files
            </Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <View>
                <Text style={{fontSize: 16, marginVertical: 8, textAlign: "center"}}>
                    Input some text that will be stored to file
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Dummy text here"}>
                </TextInput>
                <TouchableHighlight
                    style={styles.submit}
                    underlayColor='#fff'>
                    <Text style={styles.submitText}>
                        Store to file
                    </Text>
                </TouchableHighlight>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <TouchableHighlight
                    style={styles.submit}
                    underlayColor='#fff'>
                    <Text style={styles.submitText}>
                        Output file storage
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
export default Lab3Tab;
