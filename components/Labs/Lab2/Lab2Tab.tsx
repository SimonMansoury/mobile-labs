import React, {useCallback, useState} from "react";
import {Alert, Text, TouchableHighlight, View} from "react-native";
import styles from "../../../Styles";
import SelectMultiple from 'react-native-select-multiple'

function Lab2Tab() {

    const [selectedItems, setSelectedItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const fruits = ['Apples', 'Oranges', 'Pears', 'Milk', 'Salo', 'Hleb', 'Kefir']

    const onCheckBoxChange = useCallback((items) => {
        setSelectedItems(items)
    }, [setSelectedItems]);

    const toggleOutput = useCallback(() => {
        if (selectedItems.length == 0) {
            Alert.alert('NO PRODUCTS IN CART');
            console.log(selectedItems.length)
            return;
        } else {
            setIsVisible(!isVisible);
        }
        setIsVisible(!isVisible);
    }, [setIsVisible, isVisible, selectedItems]);

    return (
        <View style={styles.tabView}>
            <View>
                <Text style={styles.titleText}>
                    2 LAB
                </Text>
                <Text style={styles.baseText}>
                    Output in the different tab
                </Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                {isVisible ? (
                    <View>
                        <Text style={styles.resultText}>{selectedItems.map((item: any) => {
                            return item.label;
                        }).join(', ')}</Text>
                        <TouchableHighlight
                            style={styles.submit}
                            underlayColor='#fff'
                            onPress={toggleOutput}>
                            <Text style={styles.submitText}>
                                Return
                            </Text>
                        </TouchableHighlight>
                    </View>
                ) : (
                    <View>
                        <View>
                            <SelectMultiple
                                items={fruits}
                                selectedItems={selectedItems}
                                onSelectionsChange={onCheckBoxChange}/>
                        </View>
                        <TouchableHighlight
                            style={styles.submit}
                            underlayColor='#fff'
                            onPress={toggleOutput}>
                            <Text style={styles.submitText}>
                                Output result
                            </Text>
                        </TouchableHighlight>
                    </View>
                )}
            </View>
        </View>
    );
}

export default Lab2Tab;
