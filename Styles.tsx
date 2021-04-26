import {StyleSheet} from "react-native";
const itemSize = 60;

const styles = StyleSheet.create({
    tabView: {
        width: '100%',
        backgroundColor: '#fffdfd',
        padding: 10,
        marginTop: 20
    },
    resultContainer: {
        alignContent: "center",
        padding: 15
    },
    submit: {
        marginHorizontal: 60,
        marginVertical: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#0685ee',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: '#aeadbd',
        marginVertical: 10
    },
    resultText: {
        fontSize: 24,
        color: '#423eba',
        fontWeight: "400"
    },
    baseText: {
        fontSize: 16,
        textAlign: "center",
        color: "blue",
        marginBottom: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    subTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    container: {
        padding: 10
    },
    video: {
        height: 300,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    },
    picker: {
        width: "100%",
        height: itemSize,
    },
    pickerItem: {
        height: itemSize
    }
});

export default styles;
