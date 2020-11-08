import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import estilos from '../estilo';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: undefined,
      password:undefined,
    }
  }

  leitura(){
    AsyncStorage.getItem(this.state.user, (erro, senha) => {
      if(erro ==undefined && senha != null){
        if(senha == this.state.password)
          alert("Logado")
        else 
          alert("senha incorreta")
    }
    else{
      alert("Nao achou")
    }
    })
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text>Login</Text>
        <Text>Login:</Text>
        <TextInput style={estilos.caixa}
        onChangeText={(texto) =>this.setState({user:texto}) }
        ></TextInput>
        <Text>Senha:</Text>
        <TextInput style={estilos.caixa}
        onChangeText={(texto) =>this.setState({password:texto}) }
        ></TextInput>
        <Button title="Login" onPress={() => this.leitura()}> </Button>
      </View>
    )
  }
}
