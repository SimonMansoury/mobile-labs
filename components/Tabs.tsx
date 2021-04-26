import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import VideoAndAudioPlayer from "./Labs/4 Lab/VideoAndAudioPlayer";
import Lab1Tab from "./Labs/Lab1/Lab1Tab";
import Lab2Tab from "./Labs/Lab2/Lab2Tab";
import Lab3Tab from "./Labs/Lab3/Lab3Tab";

const Tab = createBottomTabNavigator();


export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="1 LAB" component={Lab1Tab}/>
                <Tab.Screen name="2 LAB" component={Lab2Tab}/>
                <Tab.Screen name="3 LAB" component={Lab3Tab}/>
                <Tab.Screen name="4 LAB" component={VideoAndAudioPlayer}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
