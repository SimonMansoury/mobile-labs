import {Button, Text, TextInput, View} from "react-native";
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
                <View style={styles.button}>
                    <Button
                        title={'STORE TO FILE'}
                        onPress={() => {
                        }}/>
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.button}>
                    <Button
                        title={'OUTPUT FILE STORAGE'}
                        onPress={() => {
                        }}/>
                </View>
            </View>
        </View>
    );
}

export default Lab3Tab;
