import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import estilos from '../estilo';
import StaticQueue from '../objects/StaticQueue';
import Example from './Canvas';
import Canvas from 'react-native-canvas';
import DrawCanvas from '../Canvas/Frame/DrawCanvas';

export default class FEC extends React.Component {
  constructor(props) {
    super(props);
    this.insertText = undefined;
    this.searchText = undefined;
    this.managerCanvas = undefined;
  }

  handleCanvas = (canvasReceive) => {
    if (canvasReceive != null) {
      this.setState({
        managerCanvas: new DrawCanvas(canvasReceive, new StaticQueue(10)),
      });
    }
  };

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.title}>Fila Estatica Circular </Text>

        <Canvas ref={this.handleCanvas} />

        <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ insertText: texto })
              }></TextInput>
            <Button
              title="Inserir"
              onPress={() =>
                this.state.managerCanvas.insertStaticQueue(
                  this.state.insertText
                )
              }
              style={estilos.appButtonContainer}></Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}></TextInput>
            <Button
              style={estilos.appButtonContainer}
              title="Remover"
              onPress={() =>
                this.state.managerCanvas.removeStaticQueue()
              }></Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ searchText: texto })
              }></TextInput>
            <Button
              style={estilos.appButtonContainer}
              title="Pesquisar"
              onPress={() =>
                this.state.managerCanvas.searchStaticQueue(
                  this.state.searchText
                )
              }></Button>
          </View>

          <View style={estilos.columnStyle}>
            <Button
              title="Limpar"
              onPress={() => this.state.managerCanvas.clearStaticQueue()}
              style={estilos.appButtonContainer}></Button>
          </View>
        </View>
      </View>
    );
  }
}
