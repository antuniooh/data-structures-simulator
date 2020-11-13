import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  AsyncStorage,
} from 'react-native';
import estilos from '../estilo';
import StaticQueue from '../objects/StaticQueue';
import { XYPlot, LineSeriesXYPlot, XAxis, YAxis } from 'react-vis';
import { Network, Node, Edge } from 'react-vis-network';

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.insertText=undefined
    this.searchText=undefined
    this.removeText=undefined
    this.staticQueueObj = new StaticQueue(10)
  }

  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.title}>Fila Estatica Circular </Text>

        <Network>
          <Node id="vader" label="Darth" />
          <Node id="luke" label="Luke" />
          <Node id="leia" label="Leia" />

          <Edge id="1" from="vader" to="luke" />
          <Edge id="2" from="vader" to="leia" />
        </Network>

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
              style={estilos.appButtonContainer}>
            </Button>
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
              onPress={() => this.staticQueueObj.remove(this.removeText)}></Button>
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
              onPress={() => this.staticQueueObj.search(this.searchText)}></Button>
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
