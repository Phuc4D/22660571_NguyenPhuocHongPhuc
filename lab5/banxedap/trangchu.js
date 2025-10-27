import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export const BIKES = [
  {
    id: '1',
    title: 'Pinarello',
    price: 1800,
    oldPrice: 2000,
    image: require('./img/xexanh.png'),
  },
  {
    id: '2',
    title: 'Pina Mountain',
    price: 1700,
    image: require('./img/xedosen.png'),
  },
  {
    id: '3',
    title: 'Pina Bike',
    price: 1500,
    oldPrice: 1600,
    image: require('./img/xetim.png'),
  },
  {
    id: '4',
    title: 'Pinarello Red',
    price: 1900,
    image: require('./img/241c1c5811168d8e6671f151053b8a6c8424a1a8.png'),
  },
  {
    id: '5',
    title: 'Pina Purple',
    price: 2700,
    oldPrice: 3000,
    image: require('./img/49d52b9b68c70d4381b662e07d65fdb7c3846000.png'),
  },
  {
    id: '6',
    title: 'Pinarello Sport',
    price: 1350,
    image: require('./img/xexanh.png'),
  },
];
function ItemCard({item, navigation}){
  return (
    <TouchableOpacity style={styles.ovuong} onPress={() => navigation.navigate('Detail', {bike: item})}>
    <Ionicons name="heart-outline" size={20} color="grey" />
    <Image source={item.image} style={styles.img}></Image>
    <Text style={styles.textOVuong}>{item.title}</Text>
    <View style={styles.row}>
      <Text style={styles.giaOVuong}>
        ${item.price}
      </Text>
    </View>

    </TouchableOpacity>
  )
}
export default function trangchu( {navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The world's Best Bike
      </Text>

      <View style={styles.row}>
      <TouchableOpacity style={styles.button}>
    <Text style={styles.text3}>
      All
    </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
    <Text style={[styles.text3, {color:'grey'}]}>
      Roadbike
    </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button}>
    <Text style={[styles.text3, {color:'grey'}]}>
      Mountain
    </Text>
     </TouchableOpacity>
      </View>

      <FlatList 
        data={BIKES}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ItemCard item = {item} navigation={navigation}/>
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between', marginBottom: 15}}
        contentContainerStyle={{ padding: 10 }} // padding quanh list


      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color:'red', 
    
  },
  img:{width : '100%', 
  height: 100, 
  resizeMode:'contain',
  },
  ovuong:{ 
    width: '48%', 
    padding: 10, 
    borderRadius: 5, 
    alignContent:'center' 
    ,justifyContent:'center', 
    backgroundColor: '#feb6c1',
    },
button:{ borderRadius: 5, borderWidth: 1, borderColor: '#e94141', width:100, height: 40, alignItems:'center', justifyContent: 'center', marginTop: 30},
text3:{color: 'red'},
textOVuong:{color:'black', textAlign: 'center' },
giaOVuong:{color:'black'},
row:{flexDirection:'row', justifyContent: 'center', }
});
