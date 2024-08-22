import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblvj2WrbQAbsfxLQGMqKVQdTwSLx_J9846A&s'}} style = {styles.appcars}/>
      <Text style = {styles.texto}>APP CARS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',
    marginTop: Constants.statusBarHeight,
  },
  texto:{
    color: 'white',
    marginTop: 25,
  },
  appcars:{
    width:366,
    height:244,
  },
});
