import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

import estilos from '../estilo';
import StaticQueue from '../objects/StaticQueue';
import Canvas from 'react-native-canvas';
import DrawCanvas from '../Canvas/Frame/DrawCanvas';
import Botao from './CustomButtom';

export default class FEC extends React.Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.managerCanvas = undefined;
  }

  handleCanvas = (canvasReceive) => {
    if (canvasReceive != null) {
      this.setState({
        managerCanvas: new DrawCanvas(canvasReceive, new StaticQueue(9)),
      });
    }
  };

  render() {
    return (
      <View style={estilos.container}>
        <Canvas ref={this.handleCanvas} />

        <View style={estilos.rowStyle}>
          <TextInput
            style={estilos.caixa}
            placeholder="Digite o número"
            keyboardType={'numeric'}
            onChangeText={(texto) =>
              this.setState({ text: texto })
            }></TextInput>
        </View>

        <View style={estilos.rowStyle}>
          <Botao
            onPress={() =>
              this.state.managerCanvas.insertStaticQueue(this.state.text)
            }>
            Inserir
          </Botao>

          <Botao onPress={() => this.state.managerCanvas.removeStaticQueue()}>
            Remover
          </Botao>

          <Botao
            onPress={() =>
              this.state.managerCanvas.searchStaticQueue(this.state.text)
            }>
            Pesquisar
          </Botao>
          <Botao onPress={() => this.state.managerCanvas.clearStaticQueue()}>
            Limpar
          </Botao>
        </View>
      </View>
    );
  }
}
