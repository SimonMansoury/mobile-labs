import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

var RNFS = require('react-native-fs');

const PizzaTranslator = () => {
    const [text, setText] = useState('');

    const x = (text: string) => {
        var path = RNFS.DocumentDirectoryPath + '/test.txt';

        RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
            .then((success) => {
                console.log('FILE WRITTEN!');
            })
            .catch((err) => {
                console.log(err.message);
            });

        // FileLogger.configure({
        //     logsDirectory: "./"
        // })
        // FileLogger.write(LogLevel.Info, text);
    }

    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => x(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    );
}

export default PizzaTranslator;