import React, {useCallback, useState} from "react";
import {Alert, Text, View} from "react-native";
import styles from "../../../Styles";
import SelectMultiple from 'react-native-select-multiple'
import Dash from "../Dash";
import CustomButton from "../../CustomComponents/CustomButton";

function Lab2Tab() {

    const [selectedItems, setSelectedItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const fruits = ['Apples', 'Oranges', 'Pears', 'Milk', 'Salo', 'Hleb', 'Kefir']

    const onCheckBoxChange = useCallback((items) => {
        setSelectedItems(items)
    }, [setSelectedItems]);
    let inputProps = {
        color: "blue",
        title: "Title"
    };
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

                <Dash/>
                {isVisible ? (
                    <View>
                        <Text style={styles.resultText}>{selectedItems.map((item: any) => {
                            return item.label;
                        }).join(', ')}</Text>
                        <CustomButton onPress={toggleOutput} title={'return'}/>

                    </View>
                ) : (
                    <View>
                        <View>
                            <SelectMultiple
                                items={fruits}
                                selectedItems={selectedItems}
                                onSelectionsChange={onCheckBoxChange}/>
                        </View>
                        <CustomButton onPress={toggleOutput} title={'Output result'}/>
                    </View>
                )}
            </View>
        </View>
    );
}

export default Lab2Tab;
