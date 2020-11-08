import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import estilos from '../estilo';

export default class Cadastro extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: undefined,
      password:undefined,
    }
  }

  gravar(){
    AsyncStorage.setItem(this.state.user, this.state.password,
    (erro) => {
      if(erro == undefined)
        alert("Gravou");
    })
  }
  render(){
    return(
      <View style={estilos.container}>
        <Text>Cadastro</Text>
        <Text>Login:</Text>
        <TextInput style={estilos.caixa}
        onChangeText={(texto) =>this.setState({user:texto}) }
        ></TextInput>
        <Text>Senha:</Text>
        <TextInput style={estilos.caixa}
        onChangeText={(texto) =>this.setState({password:texto}) }
        ></TextInput>
        <Button title="cadastro" onPress={() => this.gravar()}> </Button>
      </View>
    )
  }
}
