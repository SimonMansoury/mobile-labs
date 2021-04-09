// import {useCallback, useState} from "react";
// import {Alert, Button, Text, TouchableHighlight, View} from "react-native";
// import styles from "../../Styles";
// import SelectMultiple from 'react-native-select-multiple'
//
//
//
//
// const Lab1Tab = () => {
//
//     const [isVisible, setIsVisible] = useState(false);
//     const fruits = ['Apples', 'Oranges', 'Pears', 'Milk', 'Salo', 'Hleb', 'Kefir']
//     const [selectedItems, setSelectedItems] = useState([]);
//
//     const onCheckBoxChange = useCallback((items) => {
//         setSelectedItems(items)
//         console.log(selectedItems.length)
//     }, [setSelectedItems]);
//
//     const toggleOutput = useCallback(() => {
//         if (selectedItems.length == 0) {
//             Alert.alert('NO PRODUCTS IN CART');
//             console.log(selectedItems.length)
//             return;
//         } else {
//             setIsVisible(!isVisible);
//         }
//         setIsVisible(!isVisible);
//
//         console.log(selectedItems)
//
//     }, [setIsVisible, isVisible, selectedItems]);
//     return (
//         <View style={
//             {
//                 marginTop: 60
//             }
//         }>
//             <Text style={styles.titleText}>
//                 1 LAB
//             </Text>
//             <View>
//                 <Text style={styles.baseText}>
//                     Output under screen
//                 </Text>
//                 <View style={{}}>
//                     <SelectMultiple
//                         items={fruits}
//                         selectedItems={selectedItems}
//                         onSelectionsChange={onCheckBoxChange}/>
//                 </View>
//                 <TouchableHighlight
//                     style={styles.submit}
//                     underlayColor='#fff'
//                     onPress={toggleOutput}>
//                     <Text style={styles.submitText}>
//                         Submit
//                     </Text>
//                 </TouchableHighlight>
//             </View>
//             <View style={styles.resultContainer}>
//                 <Text>{selectedItems.map((item: any) => {
//                     return item.label;
//                 }).join(', ')}</Text>
//                 <Button title='BACK' onPress={toggleOutput}/>
//             </View>
//         </View>
//     );
// }
// export default Lab1Tab;
