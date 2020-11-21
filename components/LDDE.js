import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import estilos from '../estilo';
import Canvas from 'react-native-canvas';
import DrawCanvas from '../Canvas/Frame/DrawCanvas';
import LinkedQueue from '../objects/LinkedQueue';
import Botao from './CustomButtom';

export default class LDDE extends React.Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.managerCanvas = undefined;
  }

  handleCanvas = (canvasReceive) => {
    if (canvasReceive != null) {
      this.setState({
        managerCanvas: new DrawCanvas(canvasReceive, new LinkedQueue()),
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
              this.state.managerCanvas.insertDoubleLinked(this.state.text)
            }>
            Inserir
          </Botao>

          <Botao onPress={() => this.state.managerCanvas.removeDoubleLinked()}>
            Remover
          </Botao>

          <Botao
            onPress={() =>
              this.state.managerCanvas.searchDoubleLinked(this.state.text)
            }>
            Pesquisar
          </Botao>
          <Botao onPress={() => this.state.managerCanvas.clearDoubleLinked()}>
            Limpar
          </Botao>
        </View>
      </View>
    );
  }
}
