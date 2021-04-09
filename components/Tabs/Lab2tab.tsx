// import {useCallback, useState} from "react";
// import {Alert, Button, ScrollView, Text, View} from "react-native";
// import styles from "../../Styles";
// import SelectMultiple from 'react-native-select-multiple'
//
// function Lab2Tab() {
//
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [isVisible, setIsVisible] = useState(false);
//     const fruits = ['Apples', 'Oranges', 'Pears', 'Milk', 'Salo', 'Hleb', 'Kefir']
//
//     const onCheckBoxChange = useCallback((items) => {
//         setSelectedItems(items)
//         //console.log(selectedItems.length)
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
//
//     return (
//         <View>
//             <ScrollView style={{width: '100%', marginVertical: 100, marginHorizontal: 10}}>
//                 <View>
//                     <Text style={styles.titleText}>
//                         2 LAB
//                     </Text>
//                     {isVisible ? (
//                         <View>
//                             <Text>{selectedItems.map((item: any) => {
//                                 return item.label;
//                             }).join(', ')}</Text>
//                             <Button title='BACK' onPress={toggleOutput}/>
//                         </View>
//                     ) : (
//                         <View>
//                             <Text style={styles.baseText}>
//                                 Output in the different tab
//                             </Text>
//                             <View style={{}}>
//                                 <SelectMultiple
//                                     items={fruits}
//                                     selectedItems={selectedItems}
//                                     onSelectionsChange={onCheckBoxChange}/>
//                             </View>
//                             <Button title='OK' onPress={toggleOutput}/>
//                         </View>
//                     )}
//                 </View>
//             </ScrollView>
//
//         </View>
//     );
// }
//
// export default Lab2Tab;
