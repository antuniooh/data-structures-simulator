import React, { useState } from 'react';
import {
  View,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Cards from './Cards';

const DATA = [
  {
    title: 'LDDE',
    subtitle: 'Lista Dinâmica Duplamente Encadeada',
    text:
      'Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ',
    image: require('../assets/ldde.png'),
  },
  {
    title: 'FEC',
    subtitle: 'Lista Dinâmica Duplamente Encadeada',
    text:
      'Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ',
    image: require('../assets/ldde.png'),
  },
  {
    title: 'Hash',
    subtitle: 'Lista Dinâmica Duplamente Encadeada',
    text:
      'Em ciência da computação, uma lista duplamente ligada é uma estrutura de dados ligada que consiste de um conjunto de registros sequencialmente ligados chamados de nós e é uma extensão da lista simplesmente ligada. ',
    image: require('../assets/ldde.png'),
  },
];

export default class ListTypes extends React.Component {
  render() {
    return (
      <View>
        <Button
        title="FEC"
        onPress={()=> this.props.navigation.navigate('FEC')}
        ></Button>
        <Button
        title="LDDE"
        onPress={()=> this.props.navigation.navigate('LDDE')}
        ></Button>
        <Button
        title="HASH"
        onPress={()=> this.props.navigation.navigate('Hash')}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  box: {
    margin: 50,
    padding: 20,
    height: '100%',
  },
});
