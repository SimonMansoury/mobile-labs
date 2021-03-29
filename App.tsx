import React, { useCallback, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears', 'Milk', 'Salo', 'Hleb', 'Kefir']

export default function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const onCheckBoxChange = useCallback((items) => {
        setSelectedItems(items)
    }, [setSelectedItems]);

    const toggleOutput = useCallback(() => {

        if (selectedItems.length == 0) {
            Alert.alert('NO PRODUCTS IN CART');
            return;
        } else {
            setIsVisible(!isVisible);
        }
        setIsVisible(!isVisible);

        console.log(selectedItems)

    }, [setIsVisible, isVisible]);

    return (
        <View style={{ width: '100%', marginTop: 60, marginHorizontal: 10 }}>
            {isVisible ? (
                <View>
                    <Text>{selectedItems.map((item) => {
                        return item.label;
                    }).join(', ')}</Text>
                    <Button title='BACK' onPress={toggleOutput} />
                </View>
            ) : (
                <View>
                    <Text>Choose products please</Text>
                    <View style={{}}>
                        <SelectMultiple
                            items={fruits}
                            selectedItems={selectedItems}
                            onSelectionsChange={onCheckBoxChange} />
                    </View>
                    <Button title='OK' onPress={toggleOutput} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red'
    }
});

//
// const styles = StyleSheet.create({
//     container: {
//         alignSelf: 'stretch',
//         width: '100pt',
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     multiselect: {
//         maxHeight: '70%',
//         width: '100%',
//         alignSelf: 'stretch',
//     },
// });
