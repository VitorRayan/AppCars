import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function SecondScreen() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://api.myjson.online/v1/records/61a18c0e-1801-4230-9862-6bc49b21e5b6');
      const data = await response.json();
      setCarros(data.data.cars);
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <FlatList
        data={carros}
        keyExtractor={(item) => item.model}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.img }} style={styles.carImagem} />
            <View style={styles.textoContainer}>
              <Text style={styles.texto}>Modelo: {item.model}</Text>
              <Text style={styles.texto}>Ano: {item.year}</Text>
              <Text style={styles.texto}>Fabricante: {item.manufacturer}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
  },
  itemContainer: {
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center',
  },
  carImagem: {
    width: 100,
    height: 70,
    marginRight: 10,
  },
  textoContainer: {
    flex: 1,
  },
  texto: {
    color: 'white',
  },
});
