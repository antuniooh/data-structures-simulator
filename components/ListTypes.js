import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import Cards from './Cards';

export default class ListTypes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Cards
            title="LDDE"
            subtitle="Lista Dinâmica Duplamente Encadeada"
            text="Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. "
            image={require('../assets/ldde.png')}></Cards>
        </View>

        <View style={styles.box}>
          <Cards
            title="FEC"
            subtitle="Fila Estática Circular"
            text="Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. "
            image={require('../assets/fec.png')}></Cards>
        </View>

        <View style={styles.box}>
          <Cards
            title="Hash"
            subtitle="Tabela Hash"
            text="Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. "
            image={require('../assets/hash.png')}></Cards>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
});
