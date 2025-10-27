import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TrangChu from './trangchu';   // import file trangchu.js
import Detail from './detail';       // import file detail.js

const Stack = createStackNavigator();

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.ovuong}> 
        <Image style={styles.img} source={require('./img/xexanh.png')} />
      </View>

      <Text style={styles.text2}>
        POWER BIKE{"\n"}SHOP
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('TrangChu')}
      >
        <Text style={styles.text3}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img:{width : '100%', height:'100%', resizeMode:'contain'},
  ovuong:{ width: '75%', height:'50%', padding: 20, borderRadius: 40, backgroundColor: '#feb6c1'},
  text2:{fontSize: 18, marginTop:20, fontWeight: 'bold', textAlign: 'center'},
  button:{ borderRadius: 40, backgroundColor: '#e94141', width:'80%', height: 40, alignItems:'center', justifyContent: 'center', marginTop: 30},
  text3:{color: 'white'}
});
