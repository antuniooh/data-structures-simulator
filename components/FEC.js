import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import estilos from '../estilo';
import {
  XYPlot, 
  LineSeriesXYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  CustomSVGSeries
  } from 'react-vis';

class example extends React.Component {
  render(){
  return (
    <XYPlot width={300} height={300} getY={d => d.value}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <CustomSVGSeries
        className="custom-marking"
        customComponent="square"
        data={[
          {x: 1, value: 10, customComponent: 'circle', size: 10},
          {x: 1.7, value: 12, size: 20, style: {stroke: 'red', fill: 'orange'}},
          {x: 2, value: 5},
          {x: 3, value: 15},
          {
            x: 2.5,
            value: 7,
            customComponent: (row, positionInPixels, globalStyle) => {
              return (
                <g className="inner-inner-component">
                  <circle cx="0" cy="0" r={10} fill="green" />
                  <text x={0} y={0}>
                    <tspan x="0" y="0">{`x: ${positionInPixels.x}`}</tspan>
                    <tspan x="0" y="1em">{`y: ${positionInPixels.y}`}</tspan>
                  </text>
                </g>
              );
            }
          }
        ]}
      />
    </XYPlot>
  );
  }
}

export default class Cadastro extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={estilos.container}>
        <Text style={estilos.title}>Fila Estática Circular </Text>
      <View style={estilos.rowStyle}>
          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.appButtonContainer}> </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            style={estilos.appButtonContainer}
            title="Inserir"
            onPress={() => this.leitura()}>
             </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
            <Button 
            style={estilos.appButtonContainer}
            title="Inserir"
            onPress={() => this.leitura()}>
            </Button>
          </View>

          <View style={estilos.columnStyle}>
            <TextInput style={estilos.caixa}
            onChangeText={(texto) =>this.setState({password:texto}) }
            ></TextInput>
           <Button 
            title="Inserir"
            onPress={() => this.leitura()}
            style={estilos.appButtonContainer}> </Button>
          </View>
          
      </View>

      </View>
    )
  }
}


