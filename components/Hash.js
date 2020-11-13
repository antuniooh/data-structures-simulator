import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import estilos from '../estilo';
import HashTable from '../objects/HashTable';

export default class Hash extends React.Component{
  constructor(props){
    super(props);
    this.insertText=undefined
    this.searchText=undefined
    this.removeText=undefined
    this.hashTableObj=HashTable()
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.title}>Tabela Hash </Text>
 <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.buttons}> </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({removeText:texto}) }
            ></TextInput>
            <Button 
            title="Remover"
            onPress={() => this.hashTableObj.remove(this.removeText)}
            style={estilos.buttons}> </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({searchText:texto}) }
            ></TextInput>
            <Button 
            title="Pesquisar"
            onPress={() => this.hashTableObj.search(this.searchText)}
            style={estilos.botao}> </Button>
          </View>

          <View style={estilos.columnStyle}>
           <Button 
            title="Limpar"
            onPress={() => this.hashTableObj.clear()}
            style={estilos.buttons}> </Button>
          </View>
          
      </View>
      </View>
    )
  }
}
