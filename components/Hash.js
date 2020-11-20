import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import estilos from '../estilo';
import HashTable from '../objects/HashTable';
import DrawCanvas from '../Canvas/Frame/DrawCanvas';

export default class Hash extends React.Component {
  constructor(props) {
    super(props);
    this.insertKeyText = undefined;
    this.insertValueText = undefined;
    this.searchText = undefined;
    this.removeText = undefined;
    this.managerCanvas = undefined;
  }

  handleCanvas = (canvasReceive) => {
    if (canvasReceive != null) {
      this.setState({
        managerCanvas: new DrawCanvas(canvasReceive, new HashTable()),
      });
    }
  };

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.title}>Tabela Hash </Text>
        <Canvas ref={this.handleCanvas} />
        <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ insertKeyText: texto })
              }></TextInput>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ insertValueText: texto })
              }></TextInput>
            <Button
              title="Inserir"
              onPress={() =>
                this.state.managerCanvas.insertHash(
                  this.state.insertKeyText,
                  this.state.insertValueText
                )
              }
              style={estilos.buttons}></Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ removeText: texto })
              }></TextInput>
            <Button
              title="Remover"
              onPress={() => this.hashTableObj.remove(this.state.removeText)}
              style={estilos.buttons}></Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ searchText: texto })
              }></TextInput>
            <Button
              title="Pesquisar"
              onPress={() => this.hashTableObj.search(this.state.searchText)}
              style={estilos.botao}></Button>
          </View>

          <View style={estilos.columnStyle}>
            <Button
              title="Limpar"
              onPress={() => this.state.managerCanvas.clear()}
              style={estilos.buttons}></Button>
          </View>
        </View>
      </View>
    );
  }
}
