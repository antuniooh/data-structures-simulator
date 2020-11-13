import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import estilos from '../estilo';

export default class Hash extends React.Component{
  constructor(props){
    super(props);
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
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.buttons}> </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.botao}> </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
           <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.buttons}> </Button>
          </View>
          
      </View>
      </View>
    )
  }
}
