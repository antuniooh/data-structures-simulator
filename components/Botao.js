import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

class Botao extends React.Component{
  render(){
    return(
      <TouchableOpacity style={estilos.botao} onPress={this.props.onPress}>
        <Text style={estilos.texto}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default Botao;