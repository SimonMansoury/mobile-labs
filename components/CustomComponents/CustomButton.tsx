import {Button, View} from "react-native";
import React from "react";
import {ButtonModel} from "./ButtonModel";
import styles from "../../Styles";

const CustomButton = (props: ButtonModel) => {
    return (
        <View style={styles.button}>
            <Button title={props.title.toUpperCase()} onPress=
                {props.onPress}/>
        </View>);
}

export default CustomButton;

