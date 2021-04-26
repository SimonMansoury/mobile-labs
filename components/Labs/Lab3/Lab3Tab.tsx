import {Alert, Button, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../../Styles";
import React, {useState} from "react";
import * as FileSystem from 'expo-file-system';
import Dash from "../Dash";
import CustomButton from "../../CustomComponents/CustomButton";

const dir: string | null = FileSystem.documentDirectory;
const fileName = 'result1.txt';
const path = dir + fileName;

function Lab3Tab() {
    const [text, setText] = useState("");
    const [fileText, setFileText] = useState("");


    async function deleteFile() {
        if (dir != null) {
            try {
                await FileSystem.deleteAsync(path);
                setFileText('')
            } catch (e) {
                Alert.alert('File already empty')
                console.log(e)
            }
        }
    }

    async function readFromFile() {
        if (dir != null) {
            const directoryItems = await FileSystem.readDirectoryAsync(dir);
            if (!directoryItems.some(e => e === fileName)) {
                Alert.alert('File is empty')
                return;
            }
            const fileText = await FileSystem.readAsStringAsync(path);
            setFileText(fileText);
        }
    }

    async function writeToFile() {
        if (dir != null) {
            try {

                if (text.length === 0)
                    Alert.alert('Please write something')
                let date = new Date();

                const directoryItems = await FileSystem.readDirectoryAsync(dir);
                if (!directoryItems.some(e => e === fileName))
                    await FileSystem.writeAsStringAsync(path, date.toLocaleString() + ' File storage \n');
                const fileText = await FileSystem.readAsStringAsync(path);
                const newText = fileText + date.toLocaleString() + ' ' + text + '\n';
                await FileSystem.writeAsStringAsync(path, newText);
            } catch (e) {
                Alert.alert('Something went wrong ):')
                console.log(e)
            }
        } else {
            Alert.alert('Something went wrong ):')
        }
    }

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
                    placeholder={"Dummy text here"}
                    onChangeText={(text) => setText(text)}>
                </TextInput>
                <CustomButton title={'STORE TO FILE'}
                              onPress={writeToFile}/>
                <Dash/>
                <View style={{flexDirection: "row", width: '100%', padding: 5, justifyContent: 'space-between'}}>
                    <TouchableOpacity style={
                        [{
                            width: '45%',
                            backgroundColor: 'rgba(255,0,0,0.7)',
                        }, styles.button]}>
                        <Button
                            color="#ffff"
                            title={'CLEAR FILE STORAGE'}
                            onPress={deleteFile}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={
                        [{
                            width: '45%',
                            backgroundColor: 'rgba(20,232,30,0.7)',
                        }, styles.button]}>
                        <Button
                            color="#ffff"
                            title={'OUTPUT FILE STORAGE'}
                            onPress={readFromFile}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.baseText}>File storage:</Text>

                <ScrollView style={{height: 300, margin: 20, borderWidth: 1, borderRadius: 5, marginBottom: 100}}>
                    <Text style={{padding: 10, fontStyle: 'italic'}}>{fileText}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

export default Lab3Tab;
