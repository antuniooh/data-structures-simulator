import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListTypes from "./components/AboutTypes";
import LDDE from "./components/LDDE";
import Cadastro from "./components/FEC";
import List from "./components/ScreenInfo";
import Hash from "./components/Hash";

import estilos from './estilo';

const Stack = createBottomTabNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LDDE" component={LDDE}
          options={{
            tabBarLabel:"LDDE",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "arrow-right" color={"gray"} size={size}/>
            )
          }}
          />
          <Stack.Screen name="FEC" component={Cadastro}
           options={{
            tabBarLabel:"FEC",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "circle" color={"gray"} size={size}/>
            )
          }}
          />
          <Stack.Screen name="Hash" component={Hash}
           options={{
            tabBarLabel:"Hash",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "table" color={"gray"} size={size}/>
            )
          }}
          />
          <Stack.Screen name="About" component={List}
           options={{
            tabBarLabel:"Informação",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "help" color={"gray"} size={size}/>
            )
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
