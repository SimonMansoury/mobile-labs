import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Lab1Tab from "./Tabs/Lab1tab";
import React from 'react';
//import Lab2Tab from "./Tabs/Lab2tab";
import {useCallback, useState} from "react";
import {Alert, Button, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import styles from "../Styles";
import SelectMultiple from 'react-native-select-multiple'
import PizzaTranslator from "./Dog";

const Tab = createBottomTabNavigator();


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
                <PizzaTranslator/>
            </View>
        </View>
    );
}


export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="1 LAB" component={Lab1Tab}/>
                <Tab.Screen name="2 LAB" component={Lab2Tab}/>
                <Tab.Screen name="3 LAB" component={Lab3Tab}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}