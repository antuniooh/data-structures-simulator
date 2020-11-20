import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  StatusBar,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import CustomButton from './CustomButtom';

export default class ListTypes extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Fila Estática Circular"
          onPress={() => this.props.navigation.navigate('FEC')}></Button>
        <Button
          title="Lista Dinâmica Duplamente Encadeada"
          onPress={() => this.props.navigation.navigate('LDDE')}></Button>
        <Button
          title="Tabela Hash"
          onPress={() => this.props.navigation.navigate('Hash')}
          ></Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#102559',
    alignItems: 'center',
  },
});
