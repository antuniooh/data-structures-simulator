import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import estilos from '../estilo';

class BotaoHome extends React.Component {
  render() {
    var imageSource;

    if (this.props.children == 'Fila Estática Circular')
      imageSource = require('../assets/fec.png');
    else if (this.props.children == 'Lista Dinâmica Duplamente Encadeada')
      imageSource = require('../assets/ldde.png');
    else if (this.props.children == 'Tabela Hash')
      imageSource = require('../assets/gummy-coffee.png');
    return (
      <TouchableOpacity style={estilos.botaoHome} onPress={this.props.onPress}>
        <Text style={estilos.textoHome}>{this.props.children}</Text>
        <Image style={{ width: '35%', height: 120 }} source={imageSource} />
      </TouchableOpacity>
    );
  }
}

export default BotaoHome;
