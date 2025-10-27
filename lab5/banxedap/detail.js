import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import react from 'react';

export default function Detail({route}) {
  const {bike} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.ovuong}> 
       <Image source={bike.image} style={styles.img}></Image>
       </View>
           <Text style={styles.textovuong}>
      {bike.title}
      </Text> 
        <View style ={styles.row}> 
        <Text style= {[styles.textGia, {color:'grey'}]}> 
          {bike.price}
        </Text>
        <Text style= {[styles.textGia, {textDecorationLine:'line-through'}]}>           
        {bike.oldPrice}
        </Text>
    </View>
        <Text style={[{fontSize: 20, marginTop:20}]}>
          Desciption
        </Text>
        <Text style={[{fontSize: 18, marginTop:20 ,color: 'grey'}]}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>

    <View style={styles.row}>
    <Ionicons name= 'heart-outline' size ={32}></Ionicons>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.text3}>
      Add to card
    </Text>
     </TouchableOpacity>
    </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  img:{width : '100%', height:'100%', resizeMode:'contain'},
  ovuong:{ width: '100%', height:'40%', padding: 20, borderRadius: 0, backgroundColor: '#feb6c1'},
button:{ borderRadius: 40, backgroundColor: '#e94141', width:'60%', height: 40, alignItems:'center', justifyContent: 'center',},
text3:{color: 'white'},
textovuong:{color:'black', fontWeight: 'bold', fontSize: 30},
row: {flexDirection: 'row', justifyContent:'space-between', marginTop: 20}

});
