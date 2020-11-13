import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Cards from './Cards';

const DATA = [
  {
    title: "LDDE",
    subtitle: "Lista Dinâmica Duplamente Encadeada",
    text:"Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ",
   image: require('../assets/ldde.png')
  },
  {
    title: "FEC",
    subtitle: "Lista Dinâmica Duplamente Encadeada",
    text:"Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ",
   image: require('../assets/ldde.png')
  },
  {
    title: "Hash",
    subtitle: "Lista Dinâmica Duplamente Encadeada",
    text:"Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ",
   image: require('../assets/ldde.png')
  },
];

const Item = ({ item }) => (
  <Cards
    title= {item.title}
    subtitle={item.subtitle}
    text={item.text}>
    image={item.image}
    style={styles.box}
  </Cards>
);

const ListTypes = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:'center',
  },
  box: {
    margin:50,
    padding: 20,
    height:'100%'
  }
});

export default ListTypes;