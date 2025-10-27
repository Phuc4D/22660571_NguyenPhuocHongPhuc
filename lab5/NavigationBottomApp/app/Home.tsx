import { FlatList, StyleSheet, Text, View } from 'react-native';
const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export default function Home (){
  return (
    <View style = {styles.container}>
      <FlatList 
        data = {data}
        keyExtractor = {(item) => item.id}
        renderItem = {({ item})=> <Text style = {styles.item}> {item.title} </Text>}
        />     

    </View>
  )
}
const styles = StyleSheet.create({
  container:{flex: 1, padding: 20},
  item:{padding: 15, fontSize: 20, borderBottomWidth:1}
})