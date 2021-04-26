import React, {useCallback, useState} from "react";
import {Text, View} from "react-native";
import styles from "../../../Styles";
import SelectMultiple from 'react-native-select-multiple'

const Lab1Tab = () => {
    const fruits = ['Ботинки', 'Куртка', 'Кроссовки', 'Шапка', 'Носки', 'Каблуки']
    const [selectedItems, setSelectedItems] = useState([]);

    const onCheckBoxChange = useCallback((items) => {
        setSelectedItems(items)
        console.log(selectedItems.length)
    }, [setSelectedItems]);

    return (
        <View style={styles.tabView}>
            <Text style={styles.titleText}>
                1 LAB
            </Text>
            <Text style={styles.baseText}>
                Output under screen
            </Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            <View>
                <View>
                    <SelectMultiple
                        items={fruits}
                        selectedItems={selectedItems}
                        onSelectionsChange={onCheckBoxChange}/>
                </View>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{selectedItems.map((item: any) => {
                    return item.label;
                }).join('\n')}</Text>
            </View>
        </View>
    );
}
export default Lab1Tab;
