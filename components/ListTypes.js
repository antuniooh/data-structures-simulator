import React, { useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import BotaoHome from './CustomButtonHome';
import estilos from '../estilo';

export default class ListTypes extends React.Component {
  render() {
    return (
      <SafeAreaView style={estilos.containerHome}>
        <BotaoHome onPress={() => this.props.navigation.navigate('FEC')}>
          Fila Estática Circular
        </BotaoHome>
        <BotaoHome onPress={() => this.props.navigation.navigate('LDDE')}>
          Lista Dinâmica Duplamente Encadeada
        </BotaoHome>
        <BotaoHome onPress={() => this.props.navigation.navigate('Hash')}>
          Tabela Hash
        </BotaoHome>
      </SafeAreaView>
    );
  }
}
