import * as React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import estilos from '../estilo';
import LinkedQueue from '../objects/LinkedQueue';

export default class LDDE extends React.Component {
  constructor(props) {
    super(props);
    this.insertText = undefined;
    this.searchText = undefined;
    this.removeText = undefined;
    this.linkedQueueObj = new LinkedQueue();
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.title}>Lista Dinâmica Duplamente Encadeada </Text>

        <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ insertText: texto })
              }></TextInput>
            <Button
              title="Inserir"
              onPress={() => this.linkedQueueObj.insert(this.insertText)}
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
              onPress={() => this.linkedQueueObj.remove(this.removeText)}
              style={estilos.buttons}>
              {' '}
            </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput
              style={estilos.caixa}
              onChangeText={(texto) =>
                this.setState({ searchText: texto })
              }></TextInput>
            <Button
              title="Pesquisar"
              onPress={() => this.linkedQueueObj.search(this.searchText)}
              style={estilos.botao}>
              {' '}
            </Button>
          </View>

          <View style={estilos.columnStyle}>
            <Button
              title="Limpar"
              onPress={() => this.linkedQueueObj.clear()}
              style={estilos.buttons}>
              {' '}
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
