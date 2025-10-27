import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile(){
  return (
  <View style={styles.container} >
    <Image style= {styles.avatar} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sam_Worthington_2013.jpg/800px-Sam_Worthington_2013.jpg'}}/>
    <Text style={styles.name}>
      John Doe
    </Text>
  </View>
  )
}
const styles= StyleSheet.create({
  container:{flex:1, justifyContent: 'center', alignItems:'center'},
  avatar: {width:100, height:100},
  name:{fontSize:20, fontWeight:'bold'},
})