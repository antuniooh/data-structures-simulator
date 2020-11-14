import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import estilos from '../estilo';
import StaticQueue from '../objects/StaticQueue';
import Example from './Canvas'

export default class FEC extends React.Component {
  constructor(props) {
    super(props);
    this.insertText = undefined;
    this.searchText = undefined;
    this.removeText = undefined;
    this.staticQueueObj = new StaticQueue(10);
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.title}>Fila Estatica Circular </Text>
        <Example></Example>
        <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ insertText: texto })
              }></TextInput>
            <Button
              title="Inserir"
              onPress={() => this.staticQueueObj.insert(this.insertText)}
              style={estilos.appButtonContainer}></Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ removeText: texto })
              }></TextInput>
            <Button
              style={estilos.appButtonContainer}
              title="Remover"
              onPress={() =>
                this.staticQueueObj.remove(this.removeText)
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
                this.staticQueueObj.search(this.searchText)
              }></Button>
          </View>

          <View style={estilos.columnStyle}>
            <Button
              title="Limpar"
              onPress={() => this.staticQueueObj.clear()}
              style={estilos.appButtonContainer}>
              {' '}
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
