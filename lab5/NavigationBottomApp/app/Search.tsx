import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const data = ['apple', 'banana', 'orange', 'grape', 'melon'];


export default function Search(){
  const [query, setQuery] =useState('')
  const filtered = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style = {styles.container}>
      <TextInput
        placeholder = "search..."
        style ={styles.input}
        value ={query}
        onChangeText={setQuery}
      />
      <FlatList
        data= {filtered}
        keyExtractor= {(item, index)=> index.toString()}
        renderItem = {({item}) => <Text style= {styles.item}> {item} </Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex: 1, padding: 20},
  input:{borderWidth: 1, padding: 10},
  item:{margin:10,padding: 10, fontSize: 20, borderWidth:1, borderRadius: 5}
})